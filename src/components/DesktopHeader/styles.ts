import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
    background: #283e4a;
    padding: 0 30px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    display: none;

    @media (min-width: 1180px) {
        display: block;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;

    width: 1128px;
    margin: 0 auto;
    height: 52px;

    .left, 
    .right nav {
        display: flex;
        align-items: center;
    }

    .right nav {
        height: 100%;

        button {
            background: none;
            border: 0;
            outline: 0;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 90px;
            min-height: 100%;

            color: #c7d1d8;
            cursor: pointer;
            &:hover {
                color: #fff;
            }
            &.active {
                border-bottom: 2px solid #fff;
            }
        }
    }
`;

export const LinkedInIcon = styled(GrLinkedin)`
    width: 34px;
    height: 34px;
    color: #0077b5;
    background: #fff;
    border-radius: 4px;
    flex-shrink: 0;
`;


export const SearchInput = styled.input`
    margin-left: 8px;
    
    background: #e1e9ee;
    color: rgba(0,0,0,.9);
    font-size: 14px;
    padding: 7.5px 8px;
    border: none;
    outline: 0;
    border-radius: 2px;
    
    &:focus {
        background: #fff;
    }
`;

const generalIconsCSS = css`
    width: 24px;
    height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
    ${generalIconsCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
    ${generalIconsCSS}
`;

export const ProfileCircle = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #c7d1d8;
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
    width: 16px;
    height: 16px;
`;