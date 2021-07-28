import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      iconContainer: {
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        width: "300px",
      },
    })
  )();

export default useStyles;
