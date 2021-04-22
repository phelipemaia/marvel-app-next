import md5 from 'md5';

function buildUrl(path: string) {
    const ts: number = Date.now();
    const hash: string = md5(`${ts}${process.env.NEXT_PUBLIC_API_PRIVATE_KEY}${process.env.NEXT_PUBLIC_API_KEY}`);
    const encodedUri: string = `apikey=${process.env.NEXT_PUBLIC_API_KEY}&ts=${ts}&hash=${hash}`;

    return `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_PATH}${path}?${encodedUri}`;
}

export { buildUrl };