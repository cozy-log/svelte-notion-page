/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Component from '../Component.svelte';
import Content from './content';

const meta = {
	title: 'Showcase',
	component: Component
} satisfies Meta<Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {
		content: Content.allComponents as any
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const Mobile: Story = {
	args: {
		content: Content.allComponents as any
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		},
		chromatic: {
			viewports: [320, 640]
		}
	}
};

export const DarkDesktop: Story = {
	args: {
		theme: 'dark',
		content: Content.allComponents as any
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const DarkMobile: Story = {
	args: {
		theme: 'dark',
		content: Content.allComponents as any
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		},
		chromatic: {
			viewports: [320, 640]
		}
	}
};
