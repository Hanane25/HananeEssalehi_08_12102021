import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Logo.png'
import colors from "../../style/color";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin: 50px 50px;
`
const StyledLink = styled(Link)`
    margin: 0px 10px;
    text-decoration: none;
    color: ${colors.primary};
    &:hover{
        border-bottom: 1px solid #FF6060;
    }

    @media screen and (max-width: 650px){
        text-transform: uppercase;
    }
    @media screen and (max-width: 520px){
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
    }
    @media screen and (max-width: 450px){
        font-size: 12px;
    }
`
const StyledImg = styled.img`
    width: 90%;
`


class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <Link to="/">
                    <StyledImg src={Logo} alt="" />
                </Link>
                <nav>
                    <StyledLink to='/'>Acceuil</StyledLink>
                    <StyledLink to='/about'>A Propos</StyledLink>
                </nav>

            </StyledHeader>
        )
    }
}

export default Header

