const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://yunus-strapi.herokuapp.com'
    : 'http://localhost:1337';

export default baseUrl;
