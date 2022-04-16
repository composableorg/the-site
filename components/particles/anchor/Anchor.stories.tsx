import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { Anchor } from './Anchor';

export default {
    title: 'Atoms/Base Anchor',
    component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Base = Template.bind({});
Base.args = {
    anchorText: 'Click Here',
    target: '_blank',
    href: 'https://example.com',
};
