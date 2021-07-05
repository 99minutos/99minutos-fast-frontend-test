import React from "react";
import { useStyles } from "./Loading.styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div>
        <CircularProgress color="secondary" />
      </div>
    );
  } else {
    return <div />;
  }
};

export default Loading;
