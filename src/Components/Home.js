import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

function Home() {
  return (
    <Container>
        <NavBar/>
        <Banner>
            <img src="./banner3.jpg" alt="Banner" />
        </Banner>
    </Container>
  )
}

const Container=styled.div`
    width:100%;
`;
const Banner=styled.div`
    width:100%;

    img{
        width:100%
    }
`;
export default Home