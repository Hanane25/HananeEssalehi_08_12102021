import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTags = styled.div`
    background-color: #FF6060;
    color: white;
    border-radius: 15px;
    padding: 5px 40px;
    margin-right: 20px;
    margin-bottom: 10px;
`

class Tags extends Component {
    render() {
        return (
            <StyledTags>{this.props.tag}</StyledTags>
        )
    }
}

export default Tags