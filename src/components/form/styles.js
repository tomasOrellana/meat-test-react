import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      inputContainer: {
        marginBottom: "24px",
        display: "flex",
        padding: "10px",
        height: "80px",
      },
    })
  )();

export default useStyles;
