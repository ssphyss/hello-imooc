/**
 * MenuHome
 */
import styled from 'styled-components';
// const primary = '#ea6f5a';

export const WrapperMenuHome = styled.div`
    position: relative;
    width: 100%;
    height: 72px;
    border-bottom: 1px solid #909090;    
    /* background-color: red; */
`;
export const Item = styled.div`
    display: inline-block;
    height: inherit;
    padding: 25px 20px;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
        color: #8a8a8a;
    }
`;
