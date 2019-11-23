import React, { Component } from "react";
import { Connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withCheckLogin = WrappedComponent => {
  return connect(
    state => ({
      token: state.user.token
    }),
    null
  )();
};
