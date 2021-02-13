import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import usagif1 from "./usagif1.gif";
import usagif3 from "./usagif3.gif";
import kiss from "./kiss.jpg";

const Heart = () => {
  const theme = useTheme();

  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const [currentTop, setCurrentTop] = useState(isDownMd ? 100 : 500);
  const range = useMemo(() => (isDownMd ? 200 : 1000), [isDownMd]);
  const right = useMemo(
    () =>
      Math.ceil(Math.random() * range) * (Math.round(Math.random()) ? 1 : -1),
    [range]
  );
  const useStyles = makeStyles({
    heart: {
      position: "absolute",
      margin: "auto",
      top: currentTop,
      right: right,
      bottom: 0,
      left: 0,
      backgroundColor: "#F9B3B3",
      transform: "rotate(45deg)",
      height: "25px",
      width: "25px",
      animationName: "color",
      animationDuration: "6s",
      animationIterationCount: "infinite",
    },
    before: {
      content: "",
      backgroundColor: "#F9B3B3",
      borderRadius: "50%",
      position: "absolute",
      width: "25px",
      height: "25px",
      top: "-12.5px",
      left: 0,
      animationName: "color",
      animationDuration: "6s",
      animationIterationCount: "infinite",
    },
    after: {
      content: "",
      backgroundColor: "#F9B3B3",
      borderRadius: "50%",
      position: "absolute",
      width: "25px",
      height: "25px",
      top: 0,
      right: "12.5px",
      animationName: "color",
      animationDuration: "6s",
      animationIterationCount: "infinite",
    },
  });

  useEffect(() => {
    setInterval(() => {
      setCurrentTop((currentTop) => currentTop - 3);
    }, 5);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.heart}>
      <div className={classes.before} />
      <div className={classes.after} />
    </div>
  );
};

function App() {
  document.title = `Happy Valentine's Day`;
  const theme = useTheme();

  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  const [hearts, setHearts] = useState([1]);
  const onClick = () => {
    setHearts([...hearts, 1]);
  };
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(to right, rgba(255,0,0,0), #FFC0CB, rgba(255,0,0,0))",
      }}
    >
      <Grid container>
        <Grid
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          item
          xs={3}
        >
          <img style={{ width: "100%" }} src={usagif3} alt={"loading..."} />
        </Grid>
        <Grid
          style={{
            height: "100vh",
            background:
              "linear-gradient(to right, rgba(255,0,0,0), #FFC0CB, rgba(255,0,0,0))",
          }}
          item
          xs={6}
        >
          <Box
            paddingTop={isDownMd ? "70%" : 0}
            display={"flex"}
            justifyContent={"center"}
          >
            <Typography
              variant={isDownMd ? "h6" : "h3"}
              style={{
                fontFamily: "cursive",
                textAlign: "center",
                position: "absolute",
                color: "white",
                left: isDownMd ? "33%" : "33%",
              }}
            >
              {`Love u Phanh <3`}
            </Typography>
            <img
              onClick={onClick}
              src={kiss}
              alt={"loading..."}
              style={{
                cursor: "pointer",
                width: "100%",
                height: isDownMd ? "50vh" : "100vh",
                borderRadius: 30,
              }}
            />
            {hearts.map((heart, index) => {
              return <Heart key={index} />;
            })}
            {/*<Heart />*/}
          </Box>
        </Grid>
        <Grid
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          item
          xs={3}
        >
          <img style={{ width: "100%" }} src={usagif1} alt={"loading..."} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
