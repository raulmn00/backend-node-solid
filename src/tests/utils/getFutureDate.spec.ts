import { expect, test } from 'vitest';
import { getFutureDate } from './getFutureDate';

test('increases date in one year', () => {
	const year = new Date().getFullYear();
	expect(getFutureDate(`${year}-08-12`).getFullYear()).equal(2023);
});
