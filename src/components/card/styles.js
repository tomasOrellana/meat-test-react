import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = (isLoaded, isHover) =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: isLoaded ? "0px 4px 40px rgba(0, 0, 0, 0.07)" : "none",
        margin: "16px",
        paddingBottom: "14px",
        textDecoration: "none",
        minHeight: "320px",
      },
      body: {
        position: "relative",
        display: isLoaded ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "24px",
        zIndex: 1,
      },
      title: {
        fontWeight: "700",
        fontSize: "18px",
        maxHeight: "90px",
        color: isHover ? "#D8AD3D" : "#24272A",
        fontFamily: "Raleway",
      },
      text: {
        marginTop: "9px",
        fontSize: "14px",
        maxHeight: "40px",
        color: "#3F454A",
      },
      image: {
        position: "relative",
        height: "175px",
        width: "100%",
        justifySelf: "start",
        borderRadius: "10px 10px 0px 0px",
        display: isLoaded ? "flex" : "none",
        zIndex: 0,
      },
      skeleton: {
        height: "140px",
        borderRadius: "10px 10px 10px 10px",
        opacity: "1",
        zIndex: 99,
      },
      button: {
        color: "#D8AD3D",
        fontSize: "15px",
        fontWeight: "400",
        alignSelf: "start",
        marginLeft: "18px",
        fontFamily: "Source Sans Pro",
        display: isLoaded ? "flex" : "none",
      },
    })
  )();

export default useStyles;
