import { Fragment } from "react";
import Menu from "./components/Menu/Menu";
import styled from 'styled-components';   
import Container from "./components/Container/Container";
function App() {
  return (
    <Fragment>
      <AppStyles>
        <Menu />
        <Container/>
      </AppStyles>
    </Fragment>
  );
}

const AppStyles = styled.div`
  width:100%;
  height:100vh;
  background:#121026;
  overflow:hidden;
  display:flex;
`;

export default App;
