import React from "react";
import ImageContainer from "./ImageContainer";

const cards = [
  {
    id: 1,
    img: "https://thumbs.dreamstime.com/b/happy-middle-aged-older-woman-using-phone-sitting-sofa-home-vertical-happy-middle-aged-older-woman-using-smartphone-sitting-306757979.jpg",
    text: "Prime customers, that have access to bank credit and are satisfied with the current product",
    buttonLable: "Satisfied",
  },
  {
    id: 2,
    img: "https://elements-resized.envatousercontent.com/elements-video-cover-images/23a0ee5b-b00b-40e1-831e-73e5bd2aae10/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=5b6db258e269d433c9a31a4fc58202d7bd57a4f0d292213bd0f921f348fcc2e4",
    text: "Prime customers, that have access to bank credit and are not satisfied with the current service",
    buttonLable: "Underserved",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6NvaqyLJ_5auvsCBpppj3frfwwndjrJ3ew&s",
    text: "Customers from near-prime and sub-prime segments with no access to bank credit",
    buttonLable: "Underbanked",
  },
];

const RightContent = () => {
  return (
    <div className="h-full w-3/4 flex gap-6">
      {cards.map((card) => (
        <ImageContainer key={card.id} {...card} />
      ))}
    </div>
  );
};

export default RightContent;