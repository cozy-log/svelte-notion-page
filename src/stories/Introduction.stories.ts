/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import _Example from './Example.svelte';

const meta = {
	title: 'Introduction',
	component: _Example as any
} satisfies Meta<_Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	args: {},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};