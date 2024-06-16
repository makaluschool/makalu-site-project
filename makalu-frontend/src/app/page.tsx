import CommunityBlogs from "@/Helpers/CommunityBlogs";
import Aboutus from "@/components/Home/Aboutus";
import { Banner } from "@/components/Home/Banner";
import Community from "@/components/Home/Community";
import UpcomingEvents from "@/components/Home/Events/UpcomingEvents";
import { MessageCarosel } from "@/components/Home/Message/MessageCarosel";
import NumberBanner from "@/components/Home/NumberBanner";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default async function Home() {
  const getBannerData = await axios.get("http://localhost:1337/api/home-banners?populate[0]=Banner_image");
  const getCommunityData = await axios.get("http://localhost:1337/api/community-blogs?populate[0]=blog_thumbnail&populate[1]=blog_cover_image");
 
  return (
    <div className="">
      <Banner data={getBannerData.data.data} />
      <NumberBanner />
      <CommunityBlogs data={getCommunityData.data.data} />
      <UpcomingEvents />
      <Aboutus />
      <MessageCarosel />
    </div>
  );
}
