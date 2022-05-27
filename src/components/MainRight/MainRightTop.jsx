import React from "react";
import { TopWrapper } from "./MainRightStyle";

export default function MainRightTop() {
  return (
    <TopWrapper>
      <div className="topCard">
        <div class="topCard__name">
          <h2>Statistics</h2>
          <a href=" "> View More</a>
        </div>

        <div class="earning">
          <p>
            Artwork Sold <span>177</span>
          </p>
          <p>
            Artwork Canceled <span>8</span>
          </p>
          <p>
            Artwork Pending <span>25</span>
          </p>
          <p>
            Artwork delivered <span>200 </span>
          </p>
          <p>
            Total Earnings <span>278 ETH </span>
          </p>
        </div>
      </div>
    </TopWrapper>
  );
}
