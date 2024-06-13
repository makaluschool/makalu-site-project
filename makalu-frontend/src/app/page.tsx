import { Banner } from "@/components/Home/Main/Banner";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default async function Home() {
  const getBannerData = await axios.get("http://localhost:1337/api/home-banners?populate[0]=Banner_image");
 
  return (
    <div className="">
      <Banner data={getBannerData.data.data} />
      
    </div>
  );
}
