import React from 'react';

import { clsx } from 'clsx';

import { User } from 'app/types/User';

import ListComponent from '../ListComponent';

const ListComponentUsage: React.FC = () => {
    const fetchUserData = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        return response.json() as Promise<User[]>;
    };

    const renderUser = (user: User) => (
        <div
            className={clsx(
                'bg-white',
                'shadow-md',
                'rounded-md',
                'p-4',
                'w-full',
                'transition-width'
            )}
        >
            <div className="text-xl font-bold mb-2 text-red">{user.name}</div>
            <div className="flex flex-col gap-2">
                <div>
                    <strong>ID:</strong> {user.id}
                </div>
                <div>
                    <strong>Username:</strong> {user.username}
                </div>
                <div>
                    <strong>Email:</strong> {user.email}
                </div>
                <div>
                    <strong>Phone:</strong> {user.phone}
                </div>
            </div>
        </div>
    );

    return <ListComponent fetchData={fetchUserData} renderItem={renderUser} />;
};

export default ListComponentUsage;
