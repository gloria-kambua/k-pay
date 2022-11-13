import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import NavBar from './NavBar'

function Home() {
  return (
    <Container>
        <NavBar/>
        <Banner>
            <img src="./banner.jpg" alt="Banner" />
            <img src="./mobile_banner.jpg" alt="" />
        </Banner>
        <Main>
            <Card id={1}
             image={'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/019916/1.jpg?6224'}
             price={1293}
             rating={3}
             title={'Maybelline'}/>
             <Card id={2}
             image={'https://m.media-amazon.com/images/I/51cGlUCK5WL._AC_UY327_FMwebp_QL65_.jpg'}
             price={9600}
             rating={4.5}
             title={'Echo Dot'}/>
             <Card id={3}
             image={'https://m.media-amazon.com/images/I/61n6eByjA7L._SX466_.jpg'}
             price={1453}
             rating={3}
             title={'ORGANYC Feminine Hygiene Wash'}/>
             <Card id={4}
             image={'https://m.media-amazon.com/images/I/81wegMl+ykL._AC_UY625_.jpg'}
             price={400}
             rating={4.5}
             title={'Crocs Unisex'}/>
            
        </Main>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home