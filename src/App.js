import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Address from './Components/Address';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
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
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
    width:100vw;
`;
export default App;
