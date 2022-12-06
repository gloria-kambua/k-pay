import React from 'react'
import styled from 'styled-components'

function SideBar() {
  return (
    <Container>
        <MainNav>
        <nav>
            <ul>
                <li>
                    <div className="row">
                        <div className="col">
                            <img src="./health-beauty.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#" className='health-beauty'>
                            <span className="item">Health & Beauty</span>
                        </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col">
                            <img src="./home-office.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Home & Office</span>
                        </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col">
                            <img src="./appliances.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Appliances</span>
                        </a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="row">
                        <div className="col">
                            <img src="./phone-tablet.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Phones & Tablets</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./computer.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Computing</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./electronics.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Electronics</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./fashion.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Fashion</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./gaming.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Gaming</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./baby-products.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Baby Products</span>
                        </a>
                        </div>
                    </div>
                 </li>
                 <li>
                    <div className="row">
                        <div className="col">
                            <img src="./sports.png" alt="" />
                        </div>
                        <div className="col">
                        <a href="#">
                            <span className="item">Sporting</span>
                        </a>
                        </div>
                    </div>
                 </li>
            </ul>
        </nav>
        </MainNav>
        <SubNav>
            <p className='health-beauty-subclass'>show this text</p>
        </SubNav>
    </Container>
  )
}

const Container=styled.div`
    width: max-content;
    background: #fff;
    border-radius: 10px;
    margin: 19px 18px 0 18px;
    height: fit-content;
    display: flex;
    padding-right: 1rem;
    flex: 0.15;
    }
`;
const MainNav=styled.div`
nav{
    width: 13rem;
    ul{
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        .health-beauty:hover + .health-beauty-subclass{
            display:block
            color: red;
        }
        li{
            border:none;
            margin-top:0.5rem;

            .row{
                width: 100%;
                display: flex;
                .col:first-child {
                    img{
                        width:19px;
                    }
                    a{
                        text-decoration: none;
                        color: black;
                    }
                    a:hover{
                        color: orange;
                    }
                }
                .col:nth-child(2) {
                    margin-top:-2px;
                    margin-left: 0.5rem;
                }
            }

            a{
                text-decoration: none;
                color: black;
            }
            a:hover{
                color: orange;
            }
        }
        li:hover{
            color: orange;
        }
    }
`;
const SubNav=styled.div`
    .health-beauty-subclass{
        display:none;
    }
`;
export default SideBar