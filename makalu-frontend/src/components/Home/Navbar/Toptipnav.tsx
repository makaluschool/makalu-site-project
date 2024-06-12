import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import React from "react";

const Toptipnav = () => {
  return (
    <div className="bg-blue-400 p-2 flex justify-between">
      <div className="contact_detail flex text-gray-800 font-semibold px">
        <div className="mail flex px-5 gap-2">
          <MailIcon />
          <h4>mebs2057@gmail.com</h4>
        </div>
        <div className="number flex px-2 gap-2">
          <PhoneIcon />
          <h4>(+977)9852048899</h4>
        </div>
        <div className="location flex px-2 gap-2">
          <MapPin />
          <h4>Itahari-05, Sunsari</h4>
        </div>
      </div>
      <div className="openandsocialmedia flex">
        <div className="timetoopen">
          <h4>Sunday - Friday / 9AM - 5PM</h4>
        </div>
        <div className="sociallink">
          <img
            src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
            height={10}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Toptipnav;
