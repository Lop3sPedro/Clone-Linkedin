import styled from 'styled-components'
import { FiMessageSquare } from 'react-icons/fi'

export const Container = styled.div `
    background: #0073b1;
    padding: 0 16px;

    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    @media (min-width: 1180px) {
        display: none;
    }
`;

export const ProfileCircle = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #c7d1d8;
    flex-shrink: 0;
`;

export const SearchInput = styled.input` 
    margin-left: 16px;
    width: 100%;

    background: #e1e9ee;
    color: rgba(0,0,0,.9);
    font-size: 14px;
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 2px;

    &:focus {
        background: #fff;
    }
`;

export const MessageIcon = styled(FiMessageSquare)`
    width: 24px;
    height: 24px;
    color: #fff;
    border-radius: 4px;
    flex-shrink: 0;

    margin-left: 16px;
`;