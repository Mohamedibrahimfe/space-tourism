import { useState, useEffect } from "react";
const Crew = (props) => {
  const [active, setActive] = useState("Douglas Hurley");
  const getTheItemData = (item = "Douglas") => {
    return props.crewData.map((item) => {
      while (item.name === active) {
        return (
          <div key={item.name}>
            <h1 className="role animate__animated animate__rubberBand">
              {item.role}
            </h1>
            <h2 className="crew-name animate__animated animate__fadeIn animate__delay-1s">
              {item.name}
            </h2>
            <p className="crew-bio">{item.bio}</p>
          </div>
        );
      }
    });
  };

  return (
    <picture className="crew">
      <source
        srcSet="./assets/crew/background-crew-mobile.jpg"
        media="(max-width: 600px)"
      />
      <source
        srcSet="./assets/crew/background-crew-tablet.jpg"
        media="(max-width: 900px)"
      />
      <source
        srcSet="./assets/crew/background-crew-desktop.jpg"
        media="(max-width: 1200px)"
      />
      <img
        src="./assets/crew/background-crew-desktop.jpg"
        alt="The moon and stars in space"
      />
      <div className="title">
        <h1>
          <span>02</span> Meet your crew
        </h1>
      </div>
      <hr></hr>
      <div className="container">
        <ul className="crew-list">
          {props.crewData.map((item) => {
            return (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={active === item.name ? "active dot" : "dot"}
              ></li>
            );
          })}
        </ul>

        <div className="content">{getTheItemData(active)}</div>
      </div>
    </picture>
  );
};

export default Crew;
