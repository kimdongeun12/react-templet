import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';

export default function RouteWrapper() {
  return (
    <>
      <Header />
      <Contents>
        <Outlet />
      </Contents>
    </>
  );
};

const Contents = styled.div`
  padding-top: 56px;
  padding-bottom: 40px;
`
