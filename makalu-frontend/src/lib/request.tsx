import axios from "axios";
import { bannerApi, blogApi, eventsApi } from "./api";

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

export { bannerData, blogData, eventsData };
