export const getYoutubeId = (url: string): string | null => {
	try {
		const { hostname } = new URL(url);
		if (!youtubeDomains.has(hostname)) {
			return null;
		}
		const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i;

		const match = url.match(regExp);
		if (match && match[2].length == 11) {
			return match[2];
		}
	} catch {
		// ignore invalid urls
	}

	return null;
};
const youtubeDomains = new Set([
	'youtu.be',
	'youtube.com',
	'www.youtube.com',
	'youtube-nocookie.com',
	'www.youtube-nocookie.com'
]);
