import React, { useState, useEffect } from "react";
import { containersActions } from "../../actions";

/**Material UI */
import {
  Grid,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const Container = (props) => {
  const [containers, setContainers] = useState([]);

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador

    setContainers({
      containers: containersActions.getContainers(),
    });
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <h1>Containers</h1>
          <CardContent>
            <List component="nav" aria-label="main mailbox folders">
              {containers.length ? containers.map((container, index) => (
                <ListItem button>
                  <ListItemText primary={container.name} />
                </ListItem>
              )): null}
            </List>
          </CardContent>
        </Grid>
        <Grid item xs={9}>
          <h3>Orders |</h3>
        </Grid>
      </Grid>
    </>
  );
};

export default Container;
