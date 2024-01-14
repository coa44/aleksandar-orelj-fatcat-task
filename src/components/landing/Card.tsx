import React from 'react';

import clsx from 'clsx';

interface CardProps {
    title: string;
    text: string;
    action: () => void;
}

export const Card: React.FC<CardProps> = ({ title, text, action }) => (
    <div
        className={clsx(
            'flex',
            'flex-col',
            'gap-4',
            'p-4',
            'bg-white',
            'py-6',
            'px-4',
            'rounded-2xl'
        )}
    >
        <h2
            className={clsx(
                'text-black',
                'text-2xl',
                'leading-normal',
                'font-medium'
            )}
        >
            {title}
        </h2>
        <p className={clsx('text-gray80', 'text-base', 'leading-relaxed')}>
            {text}
        </p>
        <button
            onClick={action}
            className={clsx(
                'mt-auto',
                'flex',
                'items-center',
                'text-primary',
                'gap-2.5'
            )}
        >
            Show Result
            <img src="/media/landing/arrow-purple.svg" alt="" />
        </button>
    </div>
);
