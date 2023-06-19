import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {
  const scrollToTales = () => {
    // console.log("in scroll");
    scroll.scrollTo("allTails", {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div className="home">
      <main className="main-section">
        <h1>Tale Craft</h1>
        <p className="text">
          Welcome to TaleCraft, where captivating stories ignite your
          imagination and transport you to extraordinary realms. Discover a
          treasure trove of original short stories, woven with passion,
          creativity, and a touch of magic.
        </p>

        <Link
          to="allTales"
          smooth={true}
          duration={500}
          offset={-80} // Adjust this offset value to fine-tune the scrolling position
        >
          <button className="btn">Browse the Collection</button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
