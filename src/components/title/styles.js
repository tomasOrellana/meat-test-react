import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "60px",
      },
      title: {
        textAlign: "center",
        fontFamily: "Caveat",
        fontWeight: "bold",
        fontSize: "80px",
        color: "#3F454A",
        width: "100%",
        "@media (max-width: 960px)": {
          fontSize: "48px",
        },
      },
      headingShape: {
        position: "absolute",
        marginTop: "42px",
        paddingRight: "30px",
        zIndex: -1,
        opacity: 0.3,
        "@media (max-width: 960px)": {
          maxWidth: "90vw",
        },
      },
    })
  )();

export default useStyles;
