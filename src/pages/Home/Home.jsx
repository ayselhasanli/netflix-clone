import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/media/hero_banner.jpg";
import hero_title from "../../assets/media/hero_title.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <section className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <i class="fa-solid fa-play"></i> Play
            </button>
            <button className="btn dark-btn">
              <i class="fa-solid fa-circle-info"></i> More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </section>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Movies for You"} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
