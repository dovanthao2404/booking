import React, { useState, useEffect, Fragment } from "react";
import "./Complex.css";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { actGetInfoShowtimesCinemaSystem } from "redux/actions/CinemaManagementActions";
import ClusterCinema from "./ClusterCinema";
import Accordions from "./Accordions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Complex(props) {
  const { screenWidth } = props;
  const [cinema, setCinema] = useState(0);
  const [cluster, setCluster] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetInfoShowtimesCinemaSystem());
  }, []);

  const { infoShowtimesCinemaSystem } = useSelector(
    (state) => state.cinemaManagementReducer
  );

  const handleChangeTabsCinema = (event, newValue) => {
    setCinema(newValue);
    setCluster(0);
  };

  const handleChangeTabsCluster = (event, newValue) => {
    setCluster(newValue);
  };

  const renderCinemaSystem = () => {
    return infoShowtimesCinemaSystem?.map((heThongRap, index) => {
      heThongRap.id = index;
      return (
        <Tab
          key={heThongRap.maHeThongRap}
          label={
            <>
              <img
                src={heThongRap.logo}
                alt={heThongRap.logo}
                style={{
                  width: "50px",
                  height: "50%",
                  padding: "20px",
                  display: "block",
                }}
              />
            </>
          }
          style={{ width: "90px" }}
          value={index}
          {...a11yProps(heThongRap.maHeThongRap)}
        />
      );
    });
  };

  const renderClusterCinema = () => {
    return infoShowtimesCinemaSystem[cinema].lstCumRap.map((cumRap, index) => {
      cumRap.id = index;
      return (
        <Tab
          sx={{ width: "290px" }}
          key={index}
          value={index}
          label={
            <>
              <ClusterCinema cumRap={cumRap} />
            </>
          }
          {...a11yProps(index)}
        />
      );
    });
  };

  const renderShowtimes = (lstCumRap) => {
    if (lstCumRap)
      return lstCumRap.map((listFilm, index) => {
        return (
          <TabPanel key={index} value={cluster} index={index}>
            <Box
              id="accordionDetailId"
              sx={{
                height: "540px",
                overflow: "auto",
                maxWidth: "532px",
              }}
            >
              {listFilm.danhSachPhim.map((film) => {
                return (
                  <div key={film.maPhim} id="homeAccordion">
                    <Accordions />
                  </div>
                );
              })}
            </Box>
          </TabPanel>
        );
      });
  };

  const renderCinemaCluster = () => {
    if (infoShowtimesCinemaSystem) {
      return infoShowtimesCinemaSystem?.map((heThongRap, index) => {
        heThongRap.id = index;
        return (
          <TabPanel key={index} value={cinema} index={index}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                // display: "flex",
                height: "540px",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  // display: "flex",
                }}
              >
                <Tabs
                  orientation={screenWidth > 900 ? "vertical" : "horizontal"}
                  value={cluster}
                  onChange={handleChangeTabsCluster}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  {renderClusterCinema()}
                </Tabs>
                <div>
                  {renderShowtimes(infoShowtimesCinemaSystem[cinema].lstCumRap)}
                </div>
              </Box>
            </Box>
          </TabPanel>
        );
      });
    }
  };

  const renderTabs = () => {
    return renderCinemaSystem();
  };

  return (
    <Container style={{ maxWidth: "940px" }}>
      <div id="homeCinemaComplex">
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            // display: "flex",
            height: "540px",
            border: "1px solid #ebebec",
          }}
        >
          <Box>
            <Tabs
              orientation={screenWidth > 900 ? "vertical" : "horizontal"}
              value={cinema}
              onChange={handleChangeTabsCinema}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {renderTabs()}
            </Tabs>
          </Box>
          {renderCinemaCluster()}
        </Box>
      </div>
    </Container>
  );
}
