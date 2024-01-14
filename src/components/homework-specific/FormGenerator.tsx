import React from 'react';

import { Form as FinalForm, FormRenderProps } from 'react-final-form';
import { useMutation } from 'react-query';
import { ZodError, z, ZodRawShape } from 'zod';

interface FormGeneratorProps {
    validationSchema: ZodRawShape;
    renderForm: (props: FormRenderProps) => React.ReactNode;
    apiUrl: string;
    successMessage: string;
}

/**
 * Re-usable form generator component
 * Capabilities:
 *      - Validate inputs
 *      - Makes request to the Api URL specified
 *      - Custom success message
 *      - Provides a callback function for specifying form elements
 */
const FormGenerator = <T,>({
    validationSchema,
    renderForm,
    apiUrl,
    successMessage,
}: FormGeneratorProps): React.ReactElement => {
    const zodValidatorSchema = z.object(validationSchema);

    const validator = (values: object) => {
        try {
            zodValidatorSchema.parse(values);
        } catch (error) {
            if (error instanceof ZodError) {
                const retVal: { [key: string]: string } = {};

                for (const zodError of error.errors) {
                    const message = zodError.message;
                    const name = zodError.path[0];
                    retVal[name] = message;
                }

                return retVal;
            }
            throw error;
        }
    };

    const apiMutation = useMutation((formData: T) =>
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(() => alert(successMessage))
            .catch((error) => alert(error))
    );

    return (
        <FinalForm
            onSubmit={(formData) => apiMutation.mutate(formData as T)}
            validate={validator}
            render={(props: FormRenderProps) => {
                return (
                    <form onSubmit={props.handleSubmit}>
                        {renderForm(props)}
                        <button
                            disabled={apiMutation.isLoading}
                            type="submit"
                            title="Submit"
                            className="border rounded bg-black text-white w-full py-2 px-3 text-gray-700 focus:shadow-outline  mt-10"
                        >
                            {apiMutation.isLoading
                                ? 'Saving. Please wait... '
                                : 'Submit'}
                        </button>
                    </form>
                );
            }}
        />
    );
};

export default FormGenerator;
