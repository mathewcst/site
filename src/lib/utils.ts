import CopyBtn from "./components/CopyBtn.svelte";

type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle })

	return formatter.format(new Date(date))
}

export const copy_clipboard = (node: HTMLElement) => {
	const pre = node.querySelectorAll('pre');

	if (pre.length === 0) return;

	pre.forEach((el) => {
		new CopyBtn({
			target: el,
			props: {
				code: el.getAttribute('data-code'),
			}
		});
	});
};
