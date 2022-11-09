import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>}/>
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
