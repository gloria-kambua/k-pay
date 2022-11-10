import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {

  const [basket, setBasket]= useState([])
  console.log("basket ",basket)
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home basket={basket} setBasket={setBasket}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
    width:100vw;
`;
export default App;
