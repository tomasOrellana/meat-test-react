import React, { useState } from "react";
import { Box } from "@material-ui/core";
// local import
import Item from "./item";
import useStyles from "./styles";

const SideBar = ({ setFetchedData, fetchData, isLoading }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const fetchDataItem = (option) => {
    fetch(
      `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles?filter=${option}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log(data);
      });
  };

  const onClick = (id) => {
    if (id === 1) {
      fetchDataItem("Productos");
    } else if (id === 2) {
      fetchDataItem("Recetas");
    } else if (id === 3) {
      fetchDataItem("Consejos");
    } else if (id === 0) {
      fetchData();
    }
    setSelected(id);
  };
  return (
    <Box elevation={3} className={classes.root}>
      <Item
        title="Todo"
        id={0}
        selected={selected}
        onClick={onClick}
        isLoading={isLoading}
      />
      <Item
        title="Productos"
        id={1}
        selected={selected}
        onClick={onClick}
        isLoading={isLoading}
      />
      <Item
        title="Recetas"
        id={2}
        selected={selected}
        onClick={onClick}
        isLoading={isLoading}
      />
      <Item
        title="Consejos"
        id={3}
        selected={selected}
        onClick={onClick}
        isLoading={isLoading}
      />
    </Box>
  );
};

export default SideBar;
