import type { PageServerLoad } from './$types';
import NotionClient from '@cozy-blog/notion-client';
import { PUBLIC_NOTION_API_KEY, PUBLIC_NOTION_PAGE } from '$env/static/public';

const client = new NotionClient({ auth: PUBLIC_NOTION_API_KEY });

export const load = (async () => {
	const page = await client.fetchFullPage(PUBLIC_NOTION_PAGE);
	return {
		page: page
	};
}) satisfies PageServerLoad;
