import React from "react";
import imageHero from "assets/images/image-hero.jpg";
import imageHero_ from "assets/images/image-hero-frame.jpg";
import iconTreasures from "assets/images/icons/icon-treasure.svg";
import iconCities from "assets/images/icons/icon-cities.svg";
import iconTraveler from "assets/images/icons/icon-traveler.svg";
import Button from "elements/Button";
import LandingPage from "pages/LandingPage";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="mb-3 font-weight-bold line-height-1">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="text-gray-900 font-weight-light">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="px-5 btn"
            hasShadow
            isPrimary
            onClick={showMostPicked}>
            Show Me Now
          </Button>

          <div className="mt-5 row">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={iconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3 font-weight-bold">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>

            <div className="col-auto " style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={iconTreasures}
                alt={`${props.data.treasures} Treasure`}
              />
              <h6 className="mt-3 font-weight-bold">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>

            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={iconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3 font-weight-bold">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
