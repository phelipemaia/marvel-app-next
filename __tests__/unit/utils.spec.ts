import { buildUrl } from '../../src/utils/url'
import { loadEnvConfig } from '@next/env'

jest.mock('md5', () => {
    return jest.fn().mockImplementation(() => {
        return 'hashtest'
    })
});

describe('Utils', () => {
    const NOW = Date.now;

    beforeAll(() => {
        const projectDir = process.cwd();
        loadEnvConfig(projectDir);

        global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z').getTime());
    });

    afterAll(() => {
        global.Date.now = NOW
      })

    describe('url', () => {
        it('build correct URL', () => {
            const url = buildUrl('/test');
            expect(url).toBe('https://tes.com/public/test?apikey=123&ts=1554632430000&hash=hashtest');
        });
    });
});