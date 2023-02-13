import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const RouteWrapper = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RouteWrapper;