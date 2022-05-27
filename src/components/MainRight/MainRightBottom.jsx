import React from "react";
import { TopWrapper } from "./MainRightStyle";

export default function MainRightBottom({ Sellers }) {
  return (
    <TopWrapper>
      <div className="topCard bottomRightCard">
        <div class="topCard__name">
          <h2>Top Sellers</h2>
          <a href=" "> View More</a>
        </div>

        {Sellers.map((card) => (
          <div className="topSeller" key={card.id}>
            <div className="topSellerImg">
                <img src={card.img} alt="" />
            </div>

            <p className="topSellerName">
              {card.title} <span>@sample</span>
            </p>

            <a href=" " className=" button1 btn">
              Follow
            </a>
          </div>
        ))}
      </div>
    </TopWrapper>
  );
}
