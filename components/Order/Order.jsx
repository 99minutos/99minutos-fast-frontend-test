import React from "react";

/** Material UI */
import { ListItem, ListItemText, ListItemAvatar } from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";

const Order = ({ order }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <WorkIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={order.counter} secondary={order.type} />
    </ListItem>
  );
};

export default Order;
