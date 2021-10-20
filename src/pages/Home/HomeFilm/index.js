import React, { useState } from "react";
import { Container } from "@mui/material";
import Slider from "react-slick";
import "./HomeFilm.css";
import Card from "./Card";
import { useSelector } from "react-redux";

// Custom arrow react-slick
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      onClick={onClick}
      className={className}
      src="https://tix.vn/app/assets/img/icons/next-session.png"
      alt="https://tix.vn/app/assets/img/icons/next-session.png"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      onClick={onClick}
      className={className}
      src="https://tix.vn/app/assets/img/icons/back-session.png"
      alt="https://tix.vn/app/assets/img/icons/back-session.png"
    />
  );
}

export default function HomeFilm(props) {
  const { screenWidth } = props;
  const [isNowShow, setIsNowShow] = useState(true);

  const { listFilmComingSoon, listFilmNowShowing } = useSelector(
    (state) => state.filmManagementReducer
  );
  const settings = {
    className: "center",
    centerMode: screenWidth >= 1052 ? false : true,
    infinite: true,
    centerPadding: screenWidth >= 1052 ? "0" : "20px",
    slidesToShow: screenWidth > 820 ? 2 : screenWidth > 678 ? 1.5 : 1,
    speed: 250,
    rows: 2,
    slidesPerRow: 2,
    arrows: screenWidth > 1052 ? true : false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderCardFilm = () => {
    if (listFilmNowShowing || listFilmComingSoon) {
      const listFilmNew = isNowShow
        ? [...listFilmNowShowing]
        : [...listFilmComingSoon];
      return listFilmNew?.map((value, key) => (
        <div key={key}>
          <Card film={value} screenWidth={screenWidth} />
        </div>
      ));
    }
  };

  return (
    <Container id="homeFilm" className="home-slick">
      <ul className={"homeFilm__nav"}>
        <li
          onClick={() => {
            setIsNowShow(true);
          }}
          className={`homeFilm__navChild  ${isNowShow ? `active` : ""}`}
        >
          Đang chiếu{" "}
        </li>
        <li
          onClick={() => {
            setIsNowShow(false);
          }}
          className={`homeFilm__navChild ${!isNowShow ? `active` : ""}`}
        >
          Sắp chiếu{" "}
        </li>
      </ul>
      <div>
        <Slider {...settings}>{renderCardFilm()}</Slider>
      </div>
    </Container>
  );
}
