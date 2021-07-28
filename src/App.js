import React from "react";
import { Header, Articles, Contact } from "layout/index";
import useStyle from "styles/theme";

const App = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Header />
      <Articles />
      <Contact />
    </div>
  );
};

export default App;
