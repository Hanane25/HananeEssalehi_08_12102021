import React, { Component } from "react";
import Caroussel from "../../components/Caroussel";
import data from '../../data/data.js'
import { withRouter } from "react-router";
import Tags from "../../components/AppartTags";
import AboutDropdown from "../../components/AboutDropdown";
import styled from "styled-components";
import colors from "../../style/color";
import Rating from "../../components/AppartRating";

const StyledAppartInfoHeader = styled.section`
    margin: 0 50px;
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;

    @media screen and (max-width: 890px){
        display: flex;
        flex-direction: column;
    }
`
const StyledAppartInfo = styled.div`
    width: 70%;

    @media screen and (max-width: 890px){
        width: 100%;
    }
`
const StyledAppartTitle = styled.p`
    font-size: 30px;
    color: ${colors.primary};
    margin: 0;
`
const StyledLocation = styled.p`
    color: ${colors.primary};
    margin-top: 6px;
    margin-bottom: 25px;
`
const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const StyledHost = styled.div`
    width: 15%;

    @media screen and (max-width: 890px){
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-direction: row-reverse;
    }
    @media screen and (max-width: 450px){
        display: flex;
        flex-direction: column-reverse;q
    }
`
const StyledHostInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 890px){
        width: 30%;
        margin-top: 20px;
    }
    @media screen and (max-width: 650px){
        width: 40%;
    }
    @media screen and (max-width: 450px){
        width: 100%;
    }
`
const StyledHostImg = styled.img`
    border-radius: 50%;
    width: 40%;

    @media screen and (max-width: 450px){
        width: 30%;
    }
`
const StyledHostName = styled.p`
    color: ${colors.primary};
    width: 30%;
`
const StyledAppartContent = styled.section`
    display: flex;
    margin: 0 50px;
    justify-content: space-between;

    @media screen and (max-width: 650px){
        display: flex;
        flex-direction: column;
    }
`
const StyledAppartDescription = styled.div`
    width: 48%;    

    @media screen and (max-width: 650px){
        width: 100%;
    }
`
const StyledAppartEquip = styled.div`
    width: 48%;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`


class Apparts extends Component {

    constructor(props) {
        super(props);
        this.state = { appart: null };
    }

    componentDidMount() {
        const appart = data.find((aprt) => aprt.id === this.props.match.params.id)
        this.setState({ appart })
    }


    render() {

        return (
            <main>
                {this.state.appart && (
                    <>
                        <Caroussel pictures={this.state.appart.pictures} id={this.state.appart.id} />
                        <StyledAppartInfoHeader>

                            <StyledAppartInfo>
                                <StyledAppartTitle>{this.state.appart.title}</StyledAppartTitle>
                                <StyledLocation>{this.state.appart.location}</StyledLocation>

                                <StyledTags>
                                    {this.state.appart.tags.map((tag) => (
                                        <Tags key={tag} tag={tag} />
                                    ))}
                                </StyledTags>

                            </StyledAppartInfo>

                            <StyledHost>

                                <StyledHostInfo>
                                    <StyledHostName>{this.state.appart.host.name}</StyledHostName>
                                    <StyledHostImg src={this.state.appart.host.picture} alt="" />
                                </StyledHostInfo>

                                <Rating rate={this.state.appart.rating} />

                            </StyledHost>

                        </StyledAppartInfoHeader>

                        <StyledAppartContent>
                            <StyledAppartDescription>
                                <AboutDropdown title='Description' description={this.state.appart.description} />
                            </StyledAppartDescription>
                            <StyledAppartEquip>
                                <AboutDropdown title='Équipements' description={this.state.appart.equipments.map((element) => {
                                    return (<li key={element}>{element}</li>)
                                })}
                                />
                            </StyledAppartEquip>
                        </StyledAppartContent>
                    </>
                )}

            </main>
        )
    }
}

export default withRouter(Apparts)