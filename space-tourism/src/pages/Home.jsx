import { Link } from "react-router-dom";
const Home = () => {
  return (
    // <>
    <picture className="home">
      <source
        srcSet="./assets/home/background-home-mobile.jpg"
        media="(max-width: 600px)"
      />
      <source
        srcSet="./assets/home/background-home-tablet.jpg"
        media="(max-width: 900px)"
      />
      <source
        srcSet="./assets/home/background-home-desktop.jpg"
        media="(max-width: 1200px)"
      />
      <img
        src="./assets/home/background-home-desktop.jpg"
        alt="The moon and stars in space"
      />
      <div className="content">
        <div className="text">
          <h1>So, you want to travel to</h1>
          <h2>Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore-container">
          <Link to="/destination" className="explore">
            Explore
          </Link>
        </div>
      </div>
    </picture>
  );
};

export default Home;
