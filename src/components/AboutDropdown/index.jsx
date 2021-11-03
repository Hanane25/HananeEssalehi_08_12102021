import React from "react";
import styled from "styled-components";
import colors from "../../style/color";


const StyledContent = styled.article`
    margin-bottom: 40px;
`
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: ${colors.primary};
    color: white;
    padding: 0px 20px;
    border-radius: 5px;
    cursor: pointer;
`
const StyledTitleP = styled.p`
    padding: 0px;
`
const StyledDescription = styled.ul`
    background-color: ${colors.backgroundLight};
    margin: 0;
    color: ${colors.primary};
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    list-style-type: none;
`

class AboutDropdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    handleShowDescription = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleDescription() {
        if (this.state.isOpen === true) {
            return (
                <StyledDescription>{this.props.description}</StyledDescription>
            )
        }
    }

    render() {
        return (

            <StyledContent>
                <StyledTitle onClick={() => this.handleShowDescription()}>
                    <StyledTitleP >
                        {this.props.title}
                    </StyledTitleP>
                    <div>
                        <i className={this.state.isOpen ? "fas fa-chevron-down" : "fas fa-chevron-up"}></i>
                    </div>
                </StyledTitle>

                {this.handleDescription()}
            </StyledContent>

        )
    }
}

export default AboutDropdown