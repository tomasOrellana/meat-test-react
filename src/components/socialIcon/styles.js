import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = (color) =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "55px",
        height: "55px",
        borderRadius: "100px",
        border: `3px solid ${color}`,
        marginLeft: "18px",
      },
      background: {
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "55px",
        height: "55px",
        borderRadius: "100px",
        filter: "blur(2px)",
      },
    })
  )();

export default useStyles;
