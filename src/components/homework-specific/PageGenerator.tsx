import React, { useMemo } from 'react';

import { Hero, HeroProps } from '@components/Hero';
import { ItemsShowcase, ItemsShowcaseProps } from '@components/ItemsShowcase';
import { Layout, LayoutProps } from '@components/Layout';
import { PanelShowcase, PanelShowcaseProps } from '@components/PanelShowcase';
import { TrustBar, TrustBarProps } from '@components/TrustBar';

interface HeroComponent {
    type: 'componentHero';
    props: HeroProps;
}

interface TrustBarComponent {
    type: 'componentTrustBar';
    props: TrustBarProps;
}

interface ItemsShowcaseComponent {
    type: 'componentItemsShowcase';
    props: ItemsShowcaseProps;
}

interface PanelShowcaseComponent {
    type: 'componentPanelShowcase';
    props: PanelShowcaseProps;
}

type LayoutComponent =
    | HeroComponent
    | TrustBarComponent
    | ItemsShowcaseComponent
    | PanelShowcaseComponent;

interface PageInterface {
    type: string;
    props: LayoutProps;
    components: Array<LayoutComponent>;
}

function isHeroComponent(
    component: LayoutComponent
): component is HeroComponent {
    return component.type === 'componentHero';
}

function isTrustBarComponent(
    component: LayoutComponent
): component is TrustBarComponent {
    return component.type === 'componentTrustBar';
}

function isItemsShowcaseComponent(
    component: LayoutComponent
): component is ItemsShowcaseComponent {
    return component.type === 'componentItemsShowcase';
}

function isPanelShowcaseComponent(
    component: LayoutComponent
): component is PanelShowcaseComponent {
    return component.type === 'componentPanelShowcase';
}

export interface PageGeneratorProps {
    data: Array<PageInterface>;
}

/**
 * Re-usable page generator component
 * Capabilities:
 *      - Dynamic page rendering based on the data provided
 *      - Has a predefined components which are supported
 */
const PageGenerator: React.FC<PageGeneratorProps> = (props) => {
    const { data } = props;

    return useMemo(() => {
        const pageComponents: Array<React.ReactNode> = [];

        for (const element of data) {
            if (element.type !== 'layoutSection') {
                continue;
            }

            const layoutComponents = [];
            if (element.components.length > 0) {
                for (const elementComponent of element.components) {
                    if (isHeroComponent(elementComponent)) {
                        layoutComponents.push(
                            <Hero
                                key={Math.random()}
                                {...elementComponent.props}
                            />
                        );
                    } else if (isTrustBarComponent(elementComponent)) {
                        layoutComponents.push(
                            <TrustBar
                                key={Math.random()}
                                {...elementComponent.props}
                            />
                        );
                    } else if (isItemsShowcaseComponent(elementComponent)) {
                        layoutComponents.push(
                            <ItemsShowcase
                                key={Math.random()}
                                {...elementComponent.props}
                            />
                        );
                    } else if (isPanelShowcaseComponent(elementComponent)) {
                        layoutComponents.push(
                            <PanelShowcase
                                key={Math.random()}
                                {...elementComponent.props}
                            />
                        );
                    }
                }
            }

            pageComponents.push(
                <Layout key={Math.random()} {...element.props}>
                    {layoutComponents}
                </Layout>
            );
        }

        return pageComponents;
    }, [data]);
};

export default PageGenerator;
