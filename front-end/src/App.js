import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Address from './Components/Address';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import SignUp from './Components/SignUp';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import AddProduct from './Components/AddProduct';
function App() {
  const promise=loadStripe(
    'pk_test_51M3umaK9152s7sV08XcpMikUsBA76RR6WWUC7BokdQvJFdcq5LZ3kpFbdk1aIV1VEidvJPWi2Epv0HcAZrCAo4JR00JqtkrTvn'
  )
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
          <Route path="/addproduct" element={<AddProduct/>}/>
        </Routes>
      </Container>
    </Router>
  );
}
const Container = styled.div`
    width:100vw;
`;
export default App;
