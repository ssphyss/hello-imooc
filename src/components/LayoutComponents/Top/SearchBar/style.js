/**
 * SearchBar
 */
import styled from 'styled-components';
const primary = '#ea6f5a';

export const WrapperSearchBar = styled.div`
    position: relative;
    width: 100%;
    height: 72px;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Input = styled.input`
    display: inline-block;
    padding-left: 20px;
    height: 36px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #eee;
    &:hover {
        color: #8a8a8a;
    }
`;

export const Button = styled.div`
    display: inline-block;
    /* height: auto; */
    padding: 6px 13px;
    background-color: #dfedef;
    border-radius: 20px;
    font-size: .5rem;
    cursor: pointer;
    &:hover {
        color: #8a8a8a;
    }
    &.btn-search {
        font-size: 0px;
    }
`;

