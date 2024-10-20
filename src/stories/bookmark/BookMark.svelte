<script lang="ts">
	import Bookmark from '$lib/default-notion-components/Bookmark.svelte';
	export let props: any;
	async function getMeta(url: string) {
		if (url.includes('naver.com')) {
			return {
				title: '네이버',
				description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요. 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요. 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요. 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요. 네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요.',
				favicon: 'https://www.naver.com/favicon.ico',
				image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png'
			};
		}

		return {
			title: 'You must replace this component with something that have own getMeta method',
			description: '',
			image: '',
			favicon: ''
		};
	}
</script>

<Bookmark {props} {getMeta} />
