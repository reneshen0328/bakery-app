/* eslint-disable react/prop-types */
import React from "react";
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Loading from "../components/layout/Loading.js"

// function ProtectedRoute({ component, ...args }) {
//     <Route
//         component={withAuthenticationRequired(component, {
//             onRedirecting: () => <Loading />,
//         })}
//         {...args}
//     />
// }

const ProtectedRoute = ({ component, ...args }) => (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
      {...args}
    />
  );

export default ProtectedRoute;