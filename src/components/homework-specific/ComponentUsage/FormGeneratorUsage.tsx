import React from 'react';

import { Field, FormRenderProps } from 'react-final-form';
import { z } from 'zod';

import FormGenerator from '../FormGenerator';

const FormGeneratorUsage: React.FC = () => {
    const validationSchema = {
        title: z.string().max(10, 'Title must contain at most 10 character(s)'),
        body: z
            .string()
            .max(100, 'Title must contain at most 100 character(s)'),
    };

    const renderForm = (props: FormRenderProps) => {
        const { touched, errors } = props;
        return (
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title:
                </label>
                <Field
                    name="title"
                    component="input"
                    className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        touched?.title && errors?.title
                            ? 'border-red'
                            : 'border-gray'
                    }`}
                />
                <p className="text-red text-xs italic mt-1">
                    {touched?.title && errors?.title}
                </p>

                <label className="block text-gray-700 text-sm font-bold mb-2 mt-10">
                    Body:
                </label>
                <Field
                    name="body"
                    component="textarea"
                    className={`border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        touched?.body && errors?.body
                            ? 'border-red'
                            : 'border-gray'
                    }`}
                />
                <p className="text-red text-xs italic mt-1">
                    {touched?.body && errors?.body}
                </p>
            </div>
        );
    };

    return (
        <FormGenerator
            validationSchema={validationSchema}
            renderForm={renderForm}
            apiUrl="https://jsonplaceholder.typicode.com/posts"
            successMessage="The Post has been saved successfully!"
        />
    );
};

export default FormGeneratorUsage;
