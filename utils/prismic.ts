import Prismic from '@prismicio/client';

const API_URL = `https://lais-portfolio.prismic.io/api/v2`;
const API_TOKEN = process.env.PRISMIC_ACCESS_TOKEN;

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN });
