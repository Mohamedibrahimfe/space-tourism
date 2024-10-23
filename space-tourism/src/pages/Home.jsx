const Home = () => {
  return (
    // <>
    <picture>
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
        <h1>So, you want to travel to</h1>
        <h2>Space</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <button>Explore</button>
      </div>
    </picture>
    // </>
    //  00 Home
    //  01 Destination
    //  02 Crew
    //  03 Technology

    //  So, you want to travel to
    //  Space
    //  Let’s face it; if you want to go to space, you might as well genuinely go to
    //  outer space and not hover kind of on the edge of it. Well sit back, and relax
    //  because we’ll give you a truly out of this world experience!

    //  Explore
  );
};

export default Home;
