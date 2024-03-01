import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AppProvider, UserProvider, ServiceProvider } from "./contexts";
// import styled from "styled-components";
import {
  About,
  Home,
  OrderOnline,
  SharedLayout,
  Error,
  PasswordReset,
  PriceList,
  Contact,
  Service,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Wrapper = styled.main``;
export default App;
