import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button } from '../view/components/UiComponent/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Login = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Login.args = {
	textBtn: 'Login',
	backgroundColor: '',
};

export const Register = Template.bind({});
Register.args = {
	textBtn: 'Register',
	backgroundColor: '',
};
