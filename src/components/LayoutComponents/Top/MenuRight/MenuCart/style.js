/**
 * MenuCart
 */
import styled from 'styled-components';
const primary = '#ea6f5a';

export const WrapperMenuCart = styled.div`
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #bdbdbd;
    cursor: pointer;
    &:hover {
        color: red;
    }
    & > * {
        padding: 6px 4px; 
    }

    & .wrapperBadge {
        font-size: 1.5rem;
    }
`;