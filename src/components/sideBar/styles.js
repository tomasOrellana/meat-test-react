import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "309px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.07)",
        margin: "10px",
        padding: "16px",
        paddingTop: "22px",
      },
      item: {
        height: "43px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "12px",
        paddingRight: "12px",
        borderRadius: "10px",
        "&:hover": {
          border: "1px solid #D8AD3D",
          cursor: "pointer",
        },
      },
      text: {
        fontFamily: "Open Sans",
        fontSize: "12px",
        fontHeight: "23px",
        letterSpacing: "0.03rem",
        textTransform: "uppercase",
      },
      icon: {
        width: "16px",
        height: "16px",
      },
    })
  )();

export default useStyles;
