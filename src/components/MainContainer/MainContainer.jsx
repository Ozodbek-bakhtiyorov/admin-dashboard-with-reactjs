import React from "react";
import { Wrapper } from "./MainContainer.Styles";
import banner from "../../assets/banner.jpg";
import CardMain from "./CardMain";

//import images
import imgCard1 from "../../assets/img/card (1).jpg";
import imgCard2 from "../../assets/img/card (2).jpg";
import imgCard3 from "../../assets/img/card (3).jpg";
import imgCard4 from "../../assets/img/card (4).jpg";
import imgCard5 from "../../assets/img/card (5).jpg";
import MainRightTop from './../MainRight/MainRightTop';
import MainRightBottom from "../MainRight/MainRightBottom";

const Cards = [
  {
    id: 1,
    title: "Title 1",
    img: imgCard1,
    hearts:23
  },
  {
    id: 2,
    title: "Title 2",
    img: imgCard2,
    hearts:23
  },
  {
    id: 3,
    title: "Title 3",
    img: imgCard3,
    hearts:23
  },
  {
    id: 4,
    title: "Title 4",
    img: imgCard4,
    hearts:23
  },
  {
    id: 5,
    title: "Title 5",
    img: imgCard5,
    hearts:23
  },
  {
    id: 6,
    title: "Title 6",
    img: imgCard4,
    hearts:23
  },
];

export default function MainContainer() {
  return (
    <Wrapper>
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${banner})`,
            backgroundPosition: "bottom center",
            backgroundAttachment: "fixed",
            objectFit: "cover",
          }}
        >
          <div className="textConteiner">
            <h1>Round Hall</h1>
            <h2>1.5 ETH </h2>
            <p>Uploaded By Ozodbek Bakhtiyarov</p>
            <div class="bid">
              <a href=" " className="button1">
                Bid Now
              </a>
              <p>
                Ending IN <span> 2d:15:20m</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href=" " className="button2">
                Popular
              </a>
            </div>
            <div className="filters__btns">
              <a href=" " className="button1">
                All
              </a>
              <a href=" " className="button2">
                Illustration
              </a>
              <a href=" " className="button2">
                Art
              </a>
              <a href=" " className="button2">
                Games
              </a>
            </div>
          </div>
          <main>
            {Cards.map((card) => (
              <CardMain key={card.id} {...card} />
            ))}

          </main>
        </div>
      </div>

      <div className="right">
        <MainRightTop/>
        <MainRightBottom Sellers = {Cards}/>
      </div>
    </Wrapper>
  );
}
