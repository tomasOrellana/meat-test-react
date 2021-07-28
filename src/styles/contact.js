import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        width: "70%",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      title: {
        textAlign: "center",
        fontFamily: "Caveat",
        fontWeight: "bold",
        fontSize: "80px",
        width: "100%",
        margin: "40px",
      },
      button: {
        alignSelf: "flex-end",
        marginTop: "40px",
        padding: "20px",
        borderRadius: "50px",
        backgroundColor: "#D8AD3D",
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#FFFFFF",
        width: "200px",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#009CD9",
        },
        "&:disabled": {
          backgroundColor: "#CFCFCF",
        },
      },
      snackbar: {
        color: "#FFFFFF",
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: "24px",
        padding: "12px",
        borderRadius: "10px",
        backgroundColor: "#D8AD3D",
      },
    })
  )();

export default useStyles;
