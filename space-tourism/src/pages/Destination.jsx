import React, { useState } from "react";
const Destination = (props) => {
  console.log(props);
  const [active, setActive] = useState("Moon");
  return (
    <picture className="destination">
      <source
        srcSet="./assets/destination/background-destination-mobile.jpg"
        media="(max-width: 600px)"
      />
      <source
        srcSet="./assets/destination/background-destination-tablet.jpg"
        media="(max-width: 900px)"
      />
      <source
        srcSet="./assets/destination/background-destination-desktop.jpg"
        media="(max-width: 1200px)"
      />
      <img
        src="./assets/destination/background-destination-desktop.jpg"
        alt="The moon and stars in space"
      />
      <div className="title">
        <h1>
          <span>01</span> Pick your destination
        </h1>
      </div>

      <ul className="dest-list">
        {props.destData.map((item) => {
          return (
            <li key={item.name} onClick={() => setActive(item.name)}>
              <h1 className={active === item.name ? "active" : ""}>
                {item.name}
              </h1>
            </li>
          );
        })}
      </ul>
      <div className="details">
        <h1>{props.destData.find((item) => item.name === active).name}</h1>
        <p>{props.destData.find((item) => item.name === active).description}</p>
        <hr></hr>
        <div className="distance">
          <div>
            <h2>avg. distance</h2>
            <h6>
              {props.destData.find((item) => item.name === active).distance}
            </h6>
          </div>
          <div>
            <h2>est. travel time</h2>
            <h6>
              {props.destData.find((item) => item.name === active).travel}
            </h6>
          </div>
        </div>
      </div>
    </picture>
  );
};

export default Destination;
