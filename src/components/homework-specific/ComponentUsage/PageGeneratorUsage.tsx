import React from 'react';

import PageGenerator, { PageGeneratorProps } from '../PageGenerator';

const PageGeneratorUsage: React.FC = () => {
    const pageGeneratorData: PageGeneratorProps = {
        data: [
            {
                type: 'layoutSection',
                props: { background: 'bg-cream' },
                components: [
                    {
                        type: 'componentItemsShowcase',
                        props: {
                            items: [
                                {
                                    title: 'Majestic Waterfall',
                                    description:
                                        'A breathtaking waterfall cascading down the rocks surrounded by lush greenery.',
                                },
                                {
                                    title: 'Enchanted Forest',
                                    description:
                                        'Explore the mysteries of an ancient forest with towering trees and diverse wildlife.',
                                },
                                {
                                    title: 'Sunset at the Beach',
                                    description:
                                        'Witness the serene beauty of the sun setting over the horizon, casting warm hues across the ocean.',
                                },
                                {
                                    title: 'Snow-Capped Mountains',
                                    description:
                                        'Gaze upon the stunning snow-covered peaks, standing tall against the clear blue sky.',
                                },
                                {
                                    title: 'Floral Paradise',
                                    description:
                                        'Immerse yourself in a colorful paradise filled with vibrant flowers and sweet fragrances.',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                type: 'layoutSection',
                props: { background: 'bg-cream' },
                components: [
                    {
                        type: 'componentTrustBar',
                        props: {
                            images: [
                                'https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg',
                                'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg',
                                'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                            ],
                        },
                    },
                ],
            },
            {
                type: 'layoutSection',
                props: { background: 'bg-red' },
                components: [
                    {
                        type: 'componentHero',
                        props: {
                            title: 'Hero!!',
                            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
                        },
                    },
                    {
                        type: 'componentItemsShowcase',
                        props: {
                            items: [
                                {
                                    title: 'Majestic Waterfall',
                                    description:
                                        'A breathtaking waterfall cascading down the rocks surrounded by lush greenery.',
                                },
                                {
                                    title: 'Enchanted Forest',
                                    description:
                                        'Explore the mysteries of an ancient forest with towering trees and diverse wildlife.',
                                },
                                {
                                    title: 'Sunset at the Beach',
                                    description:
                                        'Witness the serene beauty of the sun setting over the horizon, casting warm hues across the ocean.',
                                },
                                {
                                    title: 'Snow-Capped Mountains',
                                    description:
                                        'Gaze upon the stunning snow-covered peaks, standing tall against the clear blue sky.',
                                },
                                {
                                    title: 'Floral Paradise',
                                    description:
                                        'Immerse yourself in a colorful paradise filled with vibrant flowers and sweet fragrances.',
                                },
                            ],
                        },
                    },
                    {
                        type: 'componentTrustBar',
                        props: {
                            images: [
                                'https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg',
                                'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg',
                                'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                                'https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg',
                                'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg',
                                'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                                'https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/master/pass/gettyimages-1146431497.jpg',
                                'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/nature-1686808887.jpg',
                                'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                            ],
                        },
                    },
                ],
            },
            {
                type: 'layoutSection',
                props: { background: 'bg-cream' },
                components: [
                    {
                        type: 'componentPanelShowcase',
                        props: {
                            items: [
                                {
                                    title: 'Majestic Waterfall',
                                    description:
                                        'A breathtaking waterfall cascading down the rocks surrounded by lush greenery.',
                                    image: 'https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_640.jpg',
                                },
                                {
                                    title: 'Enchanted Forest',
                                    description:
                                        'Explore the mysteries of an ancient forest with towering trees and diverse wildlife.',
                                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
                                },
                                {
                                    title: 'Sunset at the Beach',
                                    description:
                                        'Witness the serene beauty of the sun setting over the horizon, casting warm hues across the ocean.',
                                    image: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_640.jpg',
                                },
                                {
                                    title: 'Snow-Capped Mountains',
                                    description:
                                        'Gaze upon the stunning snow-covered peaks, standing tall against the clear blue sky.',
                                    image: 'https://c4.wallpaperflare.com/wallpaper/43/898/568/landscape-snow-snowy-mountain-wallpaper-preview.jpg',
                                },
                                {
                                    title: 'Floral Paradise',
                                    description:
                                        'Immerse yourself in a colorful paradise filled with vibrant flowers and sweet fragrances.',
                                    image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
                                },
                            ],
                        },
                    },
                ],
            },
        ],
    };

    return <PageGenerator {...pageGeneratorData} />;
};

export default PageGeneratorUsage;
