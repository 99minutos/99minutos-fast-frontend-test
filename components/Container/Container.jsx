import React, { useState, useEffect } from "react";
import { ContainerService } from "../../services";

import { useDispatch, useSelector } from "react-redux";

import Orders from "../../components/Orders";
import Loading from "../../components/Loading";

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
  const { containers, loading } = useSelector((state) => state.containers);

  const setContainer = (container) => {
    dispatch(containersActions.addContainer(container));
  };

  useEffect(() => {
    dispatch(containersActions.getContainers());
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <h3>Containers</h3>
          <CardContent>
          <Loading loading={loading} />
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
