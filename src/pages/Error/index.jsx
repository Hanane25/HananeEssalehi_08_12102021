import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorImg from '../../assets/error.png'
import colors from "../../style/color";

const StyledContent = styled.main`
    text-align: center;
    margin: 100px 20px;
`
const StyledImg = styled.img`
    width: 55%;
    height: 40%;
`
const Styledp = styled.p`
    color: ${colors.primary};
    font-size: 2em;
    padding: 40px 0px 100px 0px;
`
const StyledLink = styled(Link)`
    color: ${colors.primary}
`

class Error extends Component {
    render() {
        return (
            <StyledContent>
                <StyledImg src={ErrorImg} alt="" />
                <Styledp>Oups! La page que vous demandez n'existe pas.</Styledp>
                <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
            </StyledContent>
        )
    }
}

export default Error