import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DealLists from './pages/Deal/DealLists';
import DealDetail from './pages/Deal/DealDetail';
import Shop from './pages/Shop/ShopLists';
import RouteWrapper from './pages/RouteWrap';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWrapper />}>
          <Route exact path='/deal' element={<DealLists />} />
          <Route exact path='/deal/:id' element={<DealDetail />} />
          <Route exact path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;