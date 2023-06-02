import React from 'react';
import { Navigate } from 'react-router';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ isSignedIn, children }) {
  if (!isSignedIn) {
    return (
      <Navigate exact to="/" replace />
    );
  }
  return children;
}
