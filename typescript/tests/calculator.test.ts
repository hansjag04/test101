import { sum } from '@src/calculator';

describe('Calculator', () => {
    it('should sum two integer values', () => {
        const result = sum(5, 8);
        expect(result).toEqual(13);
    });
})
