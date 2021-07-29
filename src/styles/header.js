import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = (heroImage) =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",

        height: "85vh",
        paddingTop: "2.5rem",
        paddingLeft: "6.5rem",
        paddingRight: "3.5rem",
        fontFamily: "Caveat",
        color: "#3F454A",
        "@media (min-width: 960px)": {
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 76%, rgba(255,255,255,1) 100%),url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
        "@media (max-width: 960px)": {
          paddingLeft: "2rem",
          paddingRight: "2rem",
          alignItems: "center",

          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 76%, rgba(255,255,255,1) 100%),url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        },
      },
      logo: {
        fontSize: "120px",
        lineHeight: "100px",
        fontWeight: "bold",
        "@media (max-width: 960px)": {
          display: "none",
        },
      },
      iconContainer: {
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
      },
      titleContainer: {
        position: "relative",
        top: "20vh",
      },
      title: {
        position: "relative",
        fontWeight: "bold",
        fontSize: "120px",
        lineHeight: "90px",
        width: "500px",
        fontFamily: "Caveat",
        zIndex: 1,
        "@media (max-width: 960px)": {
          fontSize: "65px",
          textAlign: "center",
          width: "95vw",
        },
      },
      heroShape: {
        position: "relative",
        left: "-850px",
        bottom: "120px",
        zIndex: 0,
        "@media (max-width: 960px)": {
          display: "none",
        },
      },
    })
  )();

export default useStyles;
