export let url = process.env.API_URL;

export const bannerApi = `${url}/home-banners?populate[0]=Banner_image`
export const blogApi = `${url}/community-blogs?populate[0]=blog_thumbnail&populate[1]=blog_cover_image`
export const eventsApi = `${url}/upcoming-events`
export const galleryApi = `${url}/galleries?populate[0]=gallery_images&filters[Title][$eq]=gallery`
export const galleryTitleApi = `${url}/galleries?populate[0]=gallery_images&filters[Title][$ne]=gallery`
