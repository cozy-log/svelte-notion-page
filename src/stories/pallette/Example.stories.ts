/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';

const meta = {
	title: 'Example/Pallette',
	component: Example as any,
	args: {
		theme: 'light'
	}
} satisfies Meta<Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const DarkTheme: Story = {
	args: {
		theme: 'dark'
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const Mobile: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		},
		chromatic: {
			viewports: [320, 640]
		}
	}
};
