import React, { useState, useEffect } from "react";
import { ContainerService } from "../../services";

import { useDispatch } from "react-redux";

import Orders from "../../components/Orders";
/**Material UI */
import {
  Grid,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { containersActions } from "../../actions/containers";

const Container = () => {
  const dispatch = useDispatch();
  const [containers, setContainers] = useState([]);

  const getContainers = () => {
    ContainerService.getContainer().then((containers) => {
      setContainers(containers);
      return containers;
    });
  };

  const setContainer = (container) => {
    dispatch(containersActions.addContainer(container));
  };

  useEffect(() => {
    getContainers();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <h3>Containers</h3>
          <CardContent>
            <List component="nav" aria-label="main mailbox folders">
              {containers
                ? containers.map((container, index) => (
                    <ListItem
                      key={index}
                      button
                      onClick={() => {
                        setContainer(container);
                      }}
                    >
                      <ListItemText primary={container.name} />
                    </ListItem>
                  ))
                : null}
            </List>
          </CardContent>
        </Grid>
        <Grid item xs={9}>
        

          <Orders />
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
