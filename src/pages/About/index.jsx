import React, { Component } from "react";
import styled from "styled-components";
import AboutImg from '../../assets/about.jpeg'
import AboutDropdown from "../../components/AboutDropdown";
import AboutPageData from "../../data/AboutPageData";

const StyledAboutBanner = styled.section`
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
const StyledContent = styled.section`
    padding: 50px 100px;

    @media screen and (max-width: 890px){
        padding: 50px 50px;
    }
`

class About extends Component {
    render() {
        return (
            <main>
                <StyledAboutBanner>
                    <StyledImg src={AboutImg} alt="" />
                    <StyledBannerCover></StyledBannerCover>
                </StyledAboutBanner>
                <StyledContent>
                    {AboutPageData.map((elt) => (
                        <AboutDropdown
                            key={elt.id}
                            title={elt.title}
                            description={[elt.description]}
                        />
                    ))}
                </StyledContent>
            </main>
        )
    }
}

export default About