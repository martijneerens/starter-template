import { RemoteInstance } from 'directus-sdk-javascript';

export const client = new RemoteInstance({
    url: 'https://labs.volkskrant.nl/directus/',
    version: '1.1',
    depth: 3
});
