import React from "react";

function Trending() {
  return (
    <div className="trending-outer-container">
      <div className="trending-container">
        <div className="trendingHeaderContainer">
          <h5 className="trendingHeader">Trending today</h5>
        </div>
        <div className="trend-x1">
          <div className="trendingCard">
            <div className="trending-card-outer">
              <div className="trending-card-inner">
                <h4>Scrat</h4>
                <div className="trending-text-container">
                  Scrat Blue Sky Studios Gives Scrat a Proper Sendoff in Final
                  Farewell Subreddit Iconr/movies and more
                </div>
              </div>
            </div>
          </div>
          <div className="trendingCard">
            <div className="trending-card-outer">
              <div className="trending-card-inner">
                <h4>Elon Musk</h4>
                <div className="trending-text-container">
                  Elon Musk offers to buy Twitter for $54.20 a share, saying it
                  needs to be 'transformed as private company' Subreddit
                  Iconr/news and more
                </div>
              </div>
            </div>
          </div>
          <div className="trendingCard">
            <div className="trending-card-outer">
              <div className="trending-card-inner">
                <h4>NATO</h4>
                <div className="trending-text-container">
                  Russia warns of Baltic nuclear deployment if NATO admits
                  Sweden and Finland
                </div>
              </div>
            </div>
          </div>
          <div className="trendingCard">
            <div className="trending-card-outer">
              <div className="trending-card-inner">
                <h4>Kentucky Laws</h4>
                <div className="trending-text-container">
                  'We're Suing,' Says ACLU as Kentucky GOP Enacts Draconian
                  Abortion Ban Subreddit Iconr/politics and more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
