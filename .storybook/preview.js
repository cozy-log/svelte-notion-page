const viewports = {
	mobile: {
		name: 'mobile',
		styles: {
			width: '320px',
			height: '640px'
		}
	},
	laptop: {
		name: 'laptop',
		styles: {
			width: '1024px',
			height: '768px'
		}
	},
	desktop: {
		name: 'desktop',
		styles: {
			width: '1280px',
			height: '1024px'
		}
	}
};

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	viewport: {
		viewports
	}
};
