import React, { Component } from "react";
import styled from "styled-components";
import Logo from '../../assets/LOGO-footer.png'

const StyledFooter = styled.footer`
    background-color: black;
    text-align: center;
    padding: 40px 0px;
`

const StyledP = styled.p`
    color: white;
`

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <img src={Logo} alt="" />
                <StyledP>© 2020 Kasa. All rights reserved</StyledP>
            </StyledFooter>
        )
    }
}

export default Footer