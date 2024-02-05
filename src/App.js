import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider, UserProvider, ServiceProvider } from "./contexts";
import styled from "styled-components";
import { About, Home, Request, SharedLayout, Error } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/request" element={<Request />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

const Wrapper = styled.main``;
export default App;
