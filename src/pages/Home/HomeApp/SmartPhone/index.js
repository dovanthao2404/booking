import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";

export default function SmartPhone() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const renderSlider = () => {
    const listImg = [];
    for (let i = 1; i <= 16; i++) {
      listImg.push(
        <Box key={i}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "100%",
              display: "block",
            }}
            src={`https://tix.vn/app/assets/img/icons/slide/slide${i}.jpg`}
            alt={`https://tix.vn/app/assets/img/icons/slide/slide${i}.jpg`}
          />
        </Box>
      );
    }
    return listImg;
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        component="img"
        src="https://tix.vn/app/assets/img/icons/mobile.png"
        alt="https://tix.vn/app/assets/img/icons/mobile.png"
        sx={{
          maxWidth: "100%",
          height: "100%",
          display: "block",
          padding: "0 28%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          padding: "1.5% 29.3% 0 29.3%",
          top: 0,
          left: 0,
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            width: "100%",
            left: 0,
            to: 0,
            height: "100%",
          }}
        >
          <Slider {...settings}>{renderSlider()}</Slider>
        </Box>
      </Box>
    </Box>
  );
}
