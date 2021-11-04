import React, { Component } from "react";
import styled from "styled-components";


const StyledContent = styled.section`
    margin: 0 50px;
    position: relative;
`
const StyledImg = styled.img`
    width: 100%;
    object-fit: cover;
    height: 400px;
    border-radius: 25px;
    
`
const StyledArrowLeft = styled.i`
    font-size: 5em;
    position: absolute;
    top: 35%;
    left: 0.1%;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 650px){
        font-size: 3em;
        top: 40%;
    }
    @media screen and (max-width: 450px){
        font-size: 3em;
        top: 40%;
    }
`
const StyledArrowRight = styled.i`
    font-size: 5em;
    position: absolute;
    top: 35%;
    right: 0.1%;
    color: white;
    cursor: pointer;
    
    @media screen and (max-width: 650px){
        font-size: 3em;
        top: 40%;
    }
    @media screen and (max-width: 450px){
        font-size: 3em;
        top: 40%;
    }
`
const StyledNav = styled.div`
    position: absolute;
    top: 90%;
    left: 50%;
    color: white;
`


class Caroussel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictures: [],
            photoNumber: 0,
        }
    }

    componentDidMount() {
        this.setState({ pictures: this.props.pictures })
    }

    nextPhoto() {
        const index =
            this.state.photoNumber === this.props.pictures.length - 1
                ? 0
                : this.state.photoNumber + 1

        this.setState({ photoNumber: index })
    }

    previousPhoto() {
        const index =
            this.state.photoNumber === 0
                ? this.props.pictures.length - 1
                : this.state.photoNumber - 1

        this.setState({ photoNumber: index })
    }

    render() {
        return (
            <StyledContent>
                <StyledImg src={this.state.pictures[this.state.photoNumber]} alt="" />
                {
                    this.state.pictures.length > 1 && (
                        <>
                            <StyledArrowLeft className="fas fa-chevron-left" onClick={() => this.previousPhoto()}></StyledArrowLeft>
                            <StyledArrowRight className="fas fa-chevron-right" onClick={() => this.nextPhoto()}></StyledArrowRight>
                        </>
                    )
                }


                <StyledNav>
                    {this.state.photoNumber + 1} / {this.props.pictures.length}
                </StyledNav>


            </StyledContent>
        )
    }
}

export default Caroussel