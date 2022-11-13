import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
    width:100vw;
`;
export default App;
