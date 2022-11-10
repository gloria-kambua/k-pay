import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <Container>
        <Inner>
            <Logo>
                <img src="./logo.svg" alt="" />
            </Logo>
            <SearchBar>
                <input type="text" placeholder='Search...'/>
                <SearchIcon>
                    <img src="./search-icon-image.svg" alt="" />
                </SearchIcon>
            </SearchBar>
            <RightContainer>
                <NavButton>
                    <p>Hello,</p>
                    <p>Guest</p>
                </NavButton>
                <NavButton>
                    <p>Return</p>
                    <p>Orders</p>
                </NavButton>
                <BasketButton>
                    <img src="./shopping-cart.png" alt="Shopping Cart" />
                    <p>0</p>
                </BasketButton>
            </RightContainer>
        </Inner>
        <MobileSearchBar>
                <input type="text" placeholder='Search...'/>
                <SearchIcon>
                    <img src="./search-icon-image.svg" alt="" />
                </SearchIcon>
        </MobileSearchBar>
    </Container>
  )
}

const Container=styled.div`
    width:100%;
    height:60px;
    background-color:#131921;
    display:flex;
    align-items:center;
    position:relative;

    @media only screen and (max-width:767px){
        height: 140px;
        flex-direction:column;
    }
`;
const Inner=styled.div`
   width:100%;
   display:flex;
   align-items:center;

   @media only screen and (max-width:767px){
        justify-content:space-between;
    }
`;
const Logo=styled.div`
    margin-left:20px;
    cursor:pointer;
    img{
        width:100px;
        margin-top:10px;
    }
`;
const SearchBar=styled.div`
    height:35px;
    flex:1;
    margin:0px 15px;
    display:flex;

    input{
        flex:1;
        width:100%;
        height:100%;
        border:none;
        border-radius: 5px 0px 0px 5px;
        padding-left:5px;
        outline: none;
        &::placeholder{
            padding-left:5px;
        }

    }
    @media only screen and (max-width:768px){
        display:none;
    }
`;
const RightContainer=styled.div`
    display:flex;
    align-items:center;
    width:fit-content;
    justify-content:space-around;
    height:100%;
    padding:5px 15px;

`;
const SearchIcon=styled.div`
    background-color: #F3B319;
    height:105%;
    width:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:0px 5px 5px 0px;
    img{
        width:22px;

    }
`;
const NavButton = styled.div`
    color:#fff;
    padding:5px;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    cursor:pointer;
    margin-right:15px;

    p{
        &:nth-child(1){
            font-size:12px;
            margin-bottom: -8px;
        }
        &:nth-child(2){
            font-size:14px;
            font-weight:600;
        }
    }
`;
const BasketButton=styled.div`
    display:flex;
    align-items:center;
    height:90%;
    cursor:pointer;

    img{
        width:30px;
        margin-right:10px;
    }
    p{
        color:#fff;
        font-weight:500
    }
`;
const MobileSearchBar=styled.div`
    height:35px;
    width:90%;
    display:flex;
    align-items:center;

    input{
        flex:1;
        width:100%;
        height:100%;
        border:none;
        border-radius:5px 0px 0px 5px;
        padding-left: 10px;
        outline: none;
        &:placeholder{
            padding-left: 10px;
        }
        input:focus{
            outline: none;
        }
    }
    @media only screen and (min-width:768px){
        display:none;
    }
`;
export default NavBar