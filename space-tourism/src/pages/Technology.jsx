import { useState, useEffect } from "react";
const Technology = (props) => {
  const [activeNumber, setActiveNumber] = useState(1);
  const [active, setActive] = useState("Launch vehicle");
  const [numbers] = useState([1, 2, 3]);
  return (
    <picture className="technology">
      <source
        srcSet="./assets/technology/background-technology-mobile.jpg"
        media="(max-width: 600px)"
      />
      <source
        srcSet="./assets/technology/background-technology-tablet.jpg"
        media="(max-width: 900px)"
      />
      <source
        srcSet="./assets/technology/background-technology-desktop.jpg"
        media="(max-width: 1200px)"
      />
      <img
        src="./assets/technology/background-technology-desktop.jpg"
        alt="The moon and stars in space"
      />

      <div className="title">
        <h1>
          <span>03</span> Space launch 101
        </h1>
      </div>
      <ul className="tech-list">
        {props.techData.map((item, index) => {
          return (
            <li
              key={item.name}
              onClick={() => {
                setActive(item.name);
                setActiveNumber(index + 1);
              }}
              className={active === item.name ? "active" : ""}
            >
              <p className="number">{numbers.indexOf(index) + 2}</p>
            </li>
          );
        })}
      </ul>
      <div className="tech-info">
        <h1 className="tech-title">The terminology...</h1>
        <h2 className="tech-name">{active}</h2>
        <p className="tech-description">
          {props.techData[activeNumber - 1].description}
        </p>
      </div>
    </picture>
  );
};

export default Technology;
