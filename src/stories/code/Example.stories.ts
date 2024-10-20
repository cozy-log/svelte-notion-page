/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/svelte';
import Example from './Example.svelte';
import { json } from './notion-export';
import { getCodeExampleJson } from './getCodeExampleJson';
import {
	java,
	javascript,
	dart,
	kotlin,
	typescript,
	markdown,
	python,
	sql,
	elixir,
	go
} from './support-code-examples';

const meta = {
	title: 'Example/Code',
	component: Example as any
} satisfies Meta<Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
	args: {
		content: json
	},
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	}
};

export const Mobile: Story = {
	args: {
		content: json
	},
	parameters: {
		viewport: {
			defaultViewport: 'mobile'
		}
	}
};

export const Dart: Story = {
	args: {
		title: 'Dart',
		content: getCodeExampleJson(dart, 'dart')
	}
};

export const Java: Story = {
	args: {
		title: 'Java',
		content: getCodeExampleJson(java, 'java')
	}
};

export const Javascript: Story = {
	args: {
		title: 'Javascript',
		content: getCodeExampleJson(javascript, 'javascript')
	}
};

export const Kotlin: Story = {
	args: {
		title: 'Kotlin',
		content: getCodeExampleJson(kotlin, 'kotlin')
	}
};

export const Typescript: Story = {
	args: {
		title: 'Typescript',
		content: getCodeExampleJson(typescript, 'typescript')
	}
};

export const Markdown: Story = {
	args: {
		title: 'Markdown',
		content: getCodeExampleJson(markdown, 'markdown')
	}
};

export const Python: Story = {
	args: {
		title: 'Python',
		content: getCodeExampleJson(python, 'python')
	}
};

export const Sql: Story = {
	args: {
		title: 'Sql',
		content: getCodeExampleJson(sql, 'sql')
	}
};

export const Go: Story = {
	args: {
		title: 'Go',
		content: getCodeExampleJson(go, 'go')
	}
};

export const Elixir: Story = {
	args: {
		title: 'Elixir',
		content: getCodeExampleJson(elixir, 'elixir')
	}
};

