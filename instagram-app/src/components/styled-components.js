import styled, { css } from 'styled-components';

const Username = styled.h2 `
    margin-left: 10px;
    font-size: 1rem;
    margin-top: 7px;
    ${props => props.comment && css `
        font-weight: 900;
        font-size: 0.8rem;
        display: inline;
        margin-right: 5px;
        margin-left: 0;
    `}
`

export default Username;