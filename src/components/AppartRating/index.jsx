import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../style/color";

const StyledColoredStar = styled.i`
    color : ${colors.primary};
    font-size: 1.5em;
`
const StyledStar = styled.i`
    color : ${colors.backgroundLight};
    font-size: 1.5em;
`
const StyledContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    @media screen and (max-width: 890px){
        width: 30%;
    }
    @media screen and (max-width: 450px){
        padding-right: 50%;
        width: 50%;
        padding-bottom: 20px;
    }
`

class Rating extends Component {
    render() {

        const ratingScale = [1, 2, 3, 4, 5]

        return (
            <StyledContent>
                {ratingScale.map((rating) => {
                    if (this.props.rate >= rating) {
                        return <StyledColoredStar key={rating} className="fas fa-star"></StyledColoredStar>
                    }
                    else {
                        return <StyledStar key={rating} className="fas fa-star"></StyledStar>
                    }
                })}
            </StyledContent>
        )
    }
}

export default Rating