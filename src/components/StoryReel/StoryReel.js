import React from "react";
import Story from "../Story/Story";
import man from "../../assets/img/avatar-3637425_1280.png";
import man1 from "../../assets/img/avatar-3637561_1280.png";
import man3 from "../../assets/img/man-156584_1280.png";
import man4 from "../../assets/img/man-3414477_1280.png";
import back1 from "../../assets/img/pexels-adrianna-calvo-364096.jpg";
import back2 from "../../assets/img/pexels-element-digital-712319.jpg";
import back3 from "../../assets/img/pexels-pixabay-207353.jpg";
import back4 from "../../assets/img/pexels-pixabay-276092.jpg";
import "./StoryReel.css";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={back1} profileSrc={man} title="Samuel" />
      <Story image={back2} profileSrc={man1} title="Elon" />
      <Story image={back3} profileSrc={man3} title="Jason" />
      <Story image={back4} profileSrc={man4} title="John" />
    </div>
  );
}
