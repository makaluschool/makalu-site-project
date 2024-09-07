export let url = "http://localhost:1337/api/";

export const bannerApi = `${url}/home-banners?populate[0]=Banner_image`
export const blogApi = `${url}/community-blogs?populate[0]=blog_thumbnail&populate[1]=blog_cover_image`
export const eventsApi = `${url}/upcoming-events`