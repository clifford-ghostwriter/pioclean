import React from "./contexts/userContext";
import { AppProvider, UserProvider, ServiceProvider } from "./contexts";
import styled from "styled-components";

function App() {
  return <Wrapper>hello</Wrapper>;
}

const Wrapper = styled.main`
  background-color: pink;
`;
export default App;
