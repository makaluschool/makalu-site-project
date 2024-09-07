import axios from "axios";
import {
  bannerApi,
  blogApi,
  eventsApi,
  galleryApi,
  galleryTitleApi,
  url,
} from "./api";

async function bannerData() {
  const getBannerData = await axios.get(bannerApi);
  return getBannerData;
}
async function blogData() {
  const getCommunityblogData = await axios.get(blogApi);
  return getCommunityblogData;
}
async function eventsData() {
  const getEventsData = await axios.get(eventsApi);
  return getEventsData;
}

async function getImages() {
  const getImages = await axios(galleryApi);
  const images = getImages.data.data[1].attributes.gallery_images.data;
  return images;
}

async function titleImagesRequest() {
  const titleImages = await axios(galleryTitleApi);
  return titleImages;
}

async function galleryDetailsData({ imgTitle }: { imgTitle: string }) {
  const galleryData = await axios.get(
    `${url}/galleries?filters[Title][$eq]=${imgTitle}&populate=*`
  );
  const galleryDataResponse = galleryData.data.data;
  return galleryDataResponse;
}

async function blogDetailsData({ blogTitle }: { blogTitle: string }) {
  const blogDataDetails = await axios.get(`${url}/community-blogs?filters[blog_title][$eq]=${blogTitle}&populate=*`)
  const data = (blogDataDetails.data.data)
  return data
}




export {
  bannerData,
  blogData,
  eventsData,
  getImages,
  titleImagesRequest,
  galleryDetailsData, blogDetailsData,
};
