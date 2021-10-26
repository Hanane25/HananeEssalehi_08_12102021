import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`
const StyledP = styled.p`
    position: absolute;
    color: white;
    bottom: 1px;
    padding-left: 10px;
    font-size: 0.9em;

    @media screen and (max-width: 650px) {
        font-size: 1.2em;
    }
`
const StyledArticle = styled.article`
    width: 28%; 
    margin: 20px;
    position: relative;

    @media screen and (max-width: 890px) {
        width: 40%;
    }

    @media screen and (max-width: 650px) {
        width: 100%;
        margin: 20px 0px;
    }
`
const StyledImgCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom,rgba(255,0,0,0) 0,rgba(0,0,0,.4));
    bottom: 4px;
    border-radius: 10px;
`


class AppartCards extends Component {
    render() {

        return (

            <StyledArticle>

                <Link to={`/apartment/${this.props.id}`}>

                    <StyledImg src={this.props.cover} alt="" />
                    <StyledImgCover></StyledImgCover>
                    <StyledP>{this.props.title}</StyledP>

                </Link>

            </StyledArticle>
        )
    }
}

export default AppartCards