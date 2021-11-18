import { Route } from "react-router-dom";
import styled from "styled-components";

// Component
import Main from "./main";
import Review from "./review";

function App() {

  return (
    <Wrap>
        <Route path="/" exact component={Main} />
        <Route path="/review/:day" component={Review}/>
    </Wrap>
  );
}

// Styled Component
const Wrap = styled.div`
    max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0px;
    border: 1px solid rgb(221, 221, 221);
    box-sizing: border-box;
    border-radius: 5px;
`

export default App;



//render={() => <Main day={day} {...props} props를 기존 props랑 같이주는 방법