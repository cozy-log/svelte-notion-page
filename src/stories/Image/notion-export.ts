import FrogImg from './assets/frog.jpeg';
import UglyChartImg from './assets/uglychart.png';
import ReasonToLiveImg from './assets/reasons_to_live.jpeg';

export const json = {
	blocks: [
		{
			object: 'block',
			id: 'f3eab6d3-fa21-4f62-b586-9fffc93c3fdd',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			has_children: false,
			type: 'image',
			image: {
				caption: [],
				type: 'external',
				external: {
					url: FrogImg
				}
			}
		}
	]
};

export const multipleImageJson = {
	blocks: [
		{
			object: 'block',
			id: 'eeacc1d6-d8d8-4d3a-a57f-6d2a30403074',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			has_children: false,
			type: 'paragraph',
			paragraph: {
				color: 'gray_background',
				rich_text: []
			}
		},
		{
			object: 'block',
			id: 'f3eab6d3-fa21-4f62-b586-9fffc93c3fdd',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			has_children: false,
			type: 'image',
			image: {
				caption: [],
				type: 'external',
				external: {
					url: FrogImg
				}
			}
		},
		{
			object: 'block',
			id: 'f3eab63-fa21-4f62-b586-9fffc93c3fdd',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			has_children: true,
			type: 'image',
			image: {
				caption: [],
				type: 'external',
				external: {
					url: ReasonToLiveImg
				}
			}
		},
		{
			object: 'block',
			id: '31e85e09-1ffd-4754-825b-bf92ae63d5af',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			has_children: true,
			type: 'paragraph',
			blocks: [
				{
					object: 'block',
					id: 'f3eab6d3-fa21-4f62-b586-9fffc93c3fdd',
					parent: {
						type: 'page_id',
						page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
					},
					has_children: false,
					type: 'image',
					image: {
						caption: [],
						type: 'external',
						external: {
							url: UglyChartImg
						}
					}
				}
			],
			paragraph: {
				color: 'gray_background',
				rich_text: [
					{
						type: 'text',
						text: {
							content: 'nested',
							link: null
						},
						annotations: {
							bold: false,
							italic: false,
							strikethrough: false,
							underline: false,
							code: false,
							color: 'default'
						},
						plain_text: 'nested',
						href: null
					}
				]
			}
		}
	]
};
