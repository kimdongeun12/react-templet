import React, { useEffect } from 'react';
import { Outlet , useNavigate , useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Common/Header/Header';

export default function RouteWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === '/'){
      navigate('/deal')
    }
  
    return () => {
      if(location.pathname === '/'){
        navigate('/deal')
      }
    }
  }, [])
  

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
