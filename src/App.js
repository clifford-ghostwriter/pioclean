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
  Checkout,
  Payment,
  PaymentSuccess,
  Login,
} from "./pages";
import { ProtectedRoute } from "./components";
import { UseAppContext } from "./contexts/app.Context";
// import { UseServiceContext } from "./contexts/service.Context";

function App() {
  const { user } = UseAppContext();
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

          <Route
            path="/checkout"
            element={
              <ProtectedRoute user={user}>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment"
            element={
              <ProtectedRoute user={user}>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentsuccess"
            element={
              <ProtectedRoute user={user}>
                <PaymentSuccess />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Wrapper = styled.main``;
export default App;
