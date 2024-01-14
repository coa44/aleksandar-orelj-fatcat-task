import React, { useEffect, useState } from 'react';

import { FixedSizeList } from 'react-window';

interface ListComponentProps<T> {
    fetchData: () => Promise<T[]>;
    renderItem: (item: T) => React.ReactNode;
}

/**
 * Re-usable list component
 * Capabilities:
 *      - Fetching and displaying data in a list
 *      - Provides an option to specify a source of the data
 *      - Provides an option to specify a custom style for the row of the rendered item
 */
const ListComponent = <T,>({
    fetchData,
    renderItem,
}: ListComponentProps<T>): React.ReactElement => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const result = await fetchData();
                setData(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        void fetchApiData();
    }, [fetchData]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <FixedSizeList
                    height={window.innerHeight / 2}
                    itemCount={data.length}
                    itemSize={200}
                    width={'100%'}
                >
                    {({
                        index,
                        style,
                    }: {
                        index: number;
                        style: React.CSSProperties;
                    }) => {
                        const item = data[index];
                        return <div style={style}>{renderItem(item)}</div>;
                    }}
                </FixedSizeList>
            )}
        </div>
    );
};

export default ListComponent;
