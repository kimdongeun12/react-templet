import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Deal from './pages/Deal/DealView';
import Shop from './pages/Shop/ShopView';
import RouteWrapper from './pages/RouteWrap';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route index element={<Deal />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;