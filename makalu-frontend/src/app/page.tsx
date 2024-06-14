import { Banner } from "@/components/Home/Banner";
import Community from "@/components/Home/Community";
import NumberBanner from "@/components/Home/NumberBanner";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default async function Home() {
  const getBannerData = await axios.get("http://localhost:1337/api/home-banners?populate[0]=Banner_image");
 
  return (
    <div className="">
      <Banner data={getBannerData.data.data} />
      <NumberBanner />
      <Community />
    </div>
  );
}
