import Aboutus from "@/components/Home/Aboutus";
import { Banner } from "@/components/Home/Banner";
import CommunityBlogs from "@/components/Home/CommunityBlogs";
import UpcomingEvents from "@/components/Home/Events/UpcomingEvents";
import FAQ from "@/components/Home/FAQ";
import { MessageCarosel } from "@/components/Home/Message/MessageCarosel";
import NumberBanner from "@/components/Home/NumberBanner";
import { bannerData, blogData, eventsData } from "@/lib/request";

export default async function Home() {
  const getBannerData = await bannerData();
  const getCommunityblogData = await blogData();
  const getEventsData = await eventsData();
  return (
    <div className=" ">
      <Banner data={getBannerData.data.data} />
      <NumberBanner />
      <Aboutus />
      <CommunityBlogs data={getCommunityblogData.data.data} />
      <UpcomingEvents data={getEventsData.data.data} />
      <MessageCarosel />
      <FAQ />
    </div>
  );
}
