import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import NavTop from "./NavTop";
import Pay from "./Pay";
import Seat from "./Seat";

export default function Checkout(props) {
  const [isPayment, setIsPayment] = useState(false);
  const { screenWidth } = props;
  useEffect(() => {
    screenWidth < 767.98 ? setIsPayment(false) : setIsPayment(false);
    if (isPayment && screenWidth >= 768) {
      setIsPayment(false);
    } else {
      setIsPayment(isPayment);
    }
  }, [screenWidth, isPayment]);

  return (
    <>
      <NavTop
        isPayment={isPayment}
        setIsPayment={setIsPayment}
        screenWidth={screenWidth}
      />
      <Box sx={{ marginTop: "60px" }}>
        <Seat
          isPayment={isPayment}
          setIsPayment={setIsPayment}
          screenWidth={screenWidth}
        />
        <Pay
          isPayment={isPayment}
          setIsPayment={setIsPayment}
          screenWidth={screenWidth}
        />
      </Box>
    </>
  );
}