import React from "react";
import { Component } from "react";
import AppartCards from '../../components/AppartCards'
import data from '../../data/data.js'
import styled from "styled-components";
import colors from "../../style/color.js";
import HomeImg from '../../assets/IMG.png'

const StyledContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${colors.backgroundLight};
    margin: 20px 50px;
    border-radius: 25px;
    padding: 10px;

    @media screen and (max-width: 650px) {
        background: none;
        padding: 0px;
    }
`

const StyledBanner = styled.section`
    position: relative;
    margin: 0 50px;
`

const StyledImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 25px;
`

const StyledBannerCover = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    width: 100%;
    height: 200px;
    border-radius: 25px;
    top: 0;
    Opacity: 50%;
    text-align: center;
`

const StyledText = styled.p`
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    margin: 0;
    color: white;
    font-size: 45px;

    @media screen and (max-width: 915px){
        font-size: 40px;
    }
    @media screen and (max-width: 825px){
        font-size: 35px;
    }
    @media screen and (max-width: 560px){
        font-size: 25px;
    }
`


class Home extends Component {
    render() {
        return (
            <main>

                <StyledBanner>
                    <StyledImg src={HomeImg} alt="" />
                    <StyledBannerCover></StyledBannerCover>
                    <StyledText>Chez vous, partout et ailleurs</StyledText>
                </StyledBanner>

                <StyledContent>
                    {data.map((appart) => (
                        <AppartCards key={appart.id} id={appart.id} cover={appart.cover} title={appart.title} />
                    ))}
                </StyledContent>

            </main>
        )
    }
}

export default Home