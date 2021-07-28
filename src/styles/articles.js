import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: "80px",
      },
      sideBar: {
        display: "flex",
        justifyContent: "center",
      },
      cardContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    })
  )();

export default useStyles;
