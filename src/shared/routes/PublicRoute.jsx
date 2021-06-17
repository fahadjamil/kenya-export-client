import React, { useContext } from "react";
import { Route } from "react-router-dom";

import HomeSlider from "../../website/components/Home/HomeSlider";
import SecondarySlider from "../../website/components/SecondarySlider";
import VeryTopBar from "../../website/components/VeryTopBar";
import { AuthContext } from "../context/auth-context";

const PublicRoute = (props) => {
  const auth = useContext(AuthContext);

  return (
    <Route {...props} exact={props.exact ? true : false}>
      {props.path === "/auth" || props.path === "/verify-email/:route/:email" ? (
        <React.Fragment></React.Fragment>
      ) : (
        <React.Fragment>
          <VeryTopBar />
          {props.path === "/" ? (
            <HomeSlider />
          ) : (
            <SecondarySlider path={props.path} />
          )}
        </React.Fragment>
      )}
      {props.children}
    </Route>
  );
};

export default PublicRoute;
