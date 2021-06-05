import React from 'react'
import styled from "styled-components"

const Div = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    max-width: 600px;
    margin: auto;
    margin-top: 1rem;
    padding: .5rem 1rem;
    box-shadow: 0px 0px 20px 0px #111;
`;

function Card({children, className}) {
    return (
        <Div className={className}>
            {children}
        </Div>
    )
}

export default Card
