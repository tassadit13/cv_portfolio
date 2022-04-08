import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Tassadit Sadoun</h1>
          <h2>Developpeur Backend</h2>

          <div className="pdf">
            <a href="./media/CV.pdf" target="blanck">
              telechager cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
