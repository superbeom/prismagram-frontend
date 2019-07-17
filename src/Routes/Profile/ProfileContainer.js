import React from "react";
import { withRouter, Switch, Redirect } from "react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { GET_USER, LOG_OUT } from "./ProfileQueries";
import { toast } from "react-toastify";

export default withRouter(({ match: { params: { username } } }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username }
  });

  if (error) {
    toast.error("Not found page!!");

    return (
      <Switch>
        <Redirect from="*" to="/" />
      </Switch>
    );
  }

  const logOut = useMutation(LOG_OUT);

  return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
});
