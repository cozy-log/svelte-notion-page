export const json = {
	object: 'page',
	id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b',
	created_time: '2023-01-27T13:59:00.000Z',
	last_edited_time: '2023-02-17T05:37:00.000Z',
	created_by: {
		object: 'user',
		id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
	},
	last_edited_by: {
		object: 'user',
		id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
	},
	cover: {
		type: 'external',
		external: {
			url: 'www.naver.com'
		}
	},
	icon: null,
	parent: {
		type: 'database_id',
		database_id: 'be65d799-9e98-4426-86a6-72072991e27b'
	},
	archived: false,
	properties: {
		HashTags: {
			id: 'Hhkx',
			type: 'multi_select',
			multi_select: []
		},
		'생성 일시': {
			id: 'J%7C%3BZ',
			type: 'created_time',
			created_time: '2023-01-27T13:59:00.000Z'
		},
		Slug: {
			id: 'S%3A%7B%3E',
			type: 'rich_text',
			rich_rich_text: [
				{
					type: 'text',
					text: {
						content: 'asdf',
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
					plain_text: 'asdf',
					href: null
				}
			]
		},
		텍스트: {
			id: 'q%3CHh',
			type: 'rich_text',
			rich_rich_text: []
		},
		Description: {
			id: 'qTV%3E',
			type: 'rich_text',
			rich_rich_text: []
		},
		Status: {
			id: 'vu%7C%3B',
			type: 'select',
			select: {
				id: '|QrX',
				name: 'Publishable',
				color: 'green'
			}
		},
		Name: {
			id: 'title',
			type: 'title',
			title: [
				{
					type: 'text',
					text: {
						content: 'Test',
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
					plain_text: 'Test',
					href: null
				}
			]
		}
	},
	url: 'https://www.notion.so/Test-dffa6fc27f0946409ab0a6e26309140b',
	blocks: [
		{
			object: 'block',
			id: 'a887415c-8609-410c-a29e-2e9df21ca93a',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			created_time: '2023-02-17T05:37:00.000Z',
			last_edited_time: '2023-02-17T05:37:00.000Z',
			created_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			last_edited_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			has_children: true,
			archived: false,
			type: 'toggle',
			toggle: {
				color: 'green_background',
				rich_text: [
					{
						type: 'text',
						text: {
							content: '토글',
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
						plain_text: '토글',
						href: null
					}
				]
			},
			blocks: [
				{
					object: 'block',
					id: '992088c2-81c5-47ac-a551-5d5f4de56861',
					parent: {
						type: 'block_id',
						block_id: 'a887415c-8609-410c-a29e-2e9df21ca93a'
					},
					created_time: '2023-02-17T05:37:00.000Z',
					last_edited_time: '2023-02-17T05:37:00.000Z',
					created_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					last_edited_by: {
						object: 'user',
						id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
					},
					has_children: false,
					archived: false,
					type: 'paragraph',
					paragraph: {
						color: 'default',
						rich_text: [
							{
								type: 'text',
								text: {
									content: '토글 내용',
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
								plain_text: '토글 내용',
								href: null
							}
						]
					}
				}
			]
		},
		{
			object: 'block',
			id: '78407a49-02a1-4a78-927a-96c36bf66eab',
			parent: {
				type: 'page_id',
				page_id: 'dffa6fc2-7f09-4640-9ab0-a6e26309140b'
			},
			created_time: '2023-02-17T05:37:00.000Z',
			last_edited_time: '2023-02-17T05:37:00.000Z',
			created_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			last_edited_by: {
				object: 'user',
				id: '95fc0174-8fc6-4114-8e45-f67eacd99f07'
			},
			has_children: false,
			archived: false,
			type: 'paragraph',
			paragraph: {
				color: 'default',
				rich_text: []
			}
		}
	]
};
