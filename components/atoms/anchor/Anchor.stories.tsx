import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Anchor } from './Anchor';

export default {
    title: 'Atoms/Anchor',
    component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    anchorText: 'Primary Anchor Example',
    anchorType: Anchor.type.PRIMARY,
    target: '_blank',
    href: 'https://example.com',
};

export const Footer = Template.bind({});
Footer.args = {
    anchorText: 'Footer Anchor Example',
    anchorType: Anchor.type.FOOTER,
    target: '_blank',
    href: 'https://example.com',
};
