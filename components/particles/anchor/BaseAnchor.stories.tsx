import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import { BaseAnchor } from './BaseAnchor';

export default {
    title: 'Atoms/Base Anchor',
    component: BaseAnchor,
} as ComponentMeta<typeof BaseAnchor>;

const Template: ComponentStory<typeof BaseAnchor> = (args) => <BaseAnchor {...args} />;

export const Base = Template.bind({});
Base.args = {
    anchorText: 'Click Here',
    target: '_blank',
    href: 'https://example.com',
};
