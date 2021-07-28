import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "8px",
      },
      title: {
        fontSize: "13px",
        lineHeight: "24px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "8px",
      },
      inputBox: {
        display: "flex",
      },
      inputForm: {
        borderColor: `#CFCFCF`,
        color: "#3F4544",
        fontFamily: "Open Sans",
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
          {
            display: "none",
          },
        "& input[type=number]": {
          appearance: "textfield",
        },
        "&:disabled": {
          backgroundColor: "#EAECEF",
          color: "#3F454A",
        },
        "&$cssFocused $notchedOutline": {
          borderColor: `#D8AD3D !important`,
        },
        "& placeholder": {
          color: "rgba(0, 0, 0, 0.54)",
        },
      },
      cssFocused: {},
      notchedOutline: {},
      input: {
        paddingLeft: "1.5rem",
        "&::placeholder": {
          color: "rgba(0, 0, 0, 1)",
        },
        "&:-webkit-autofill": {
          WebkitBoxShadow: "0 0 0 1000px white inset",
        },
        "&:disabled": {
          backgroundColor: "#EAECEF",
        },
      },
    })
  )();

export default useStyles;
