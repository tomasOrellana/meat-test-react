import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = (color) =>
  makeStyles(() =>
    createStyles({
      root: {
        width: "100vw",
        overflowX: "hidden",
        paddingBottom: "80px",
      },
      sticky: {
        display: "flex",
        position: "fixed",
        right: "0px",
        margin: "42px",
        minWidth: "315px",
        "@media (max-width: 960px)": {
          justifyContent: "center",
        },
      },
    })
  )();

export default useStyles;
