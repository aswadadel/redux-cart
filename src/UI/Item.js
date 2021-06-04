import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    padding: 1rem 2rem;
    box-sizing: border-box;
    width: 100%;
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &:last-child {
        border-bottom: none;
    }
`;


function Item({ children }) {
    return (
        <Div>
            {children}
        </Div>
    )
}

export default Item
