import React from 'react';
import MapBarathons from "./MapBarathons";
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { IBarathon, IPub } from '../types/api';

interface IProps {
    barathon: IBarathon;
    pubs: IPub[];
    checkpoints: IPub[];
}

const Barathon = ({ barathon, pubs, checkpoints }: IProps): JSX.Element => {


    return (
        <SThumbnail>
            <SContent>
                <STitle>{barathon.name}</STitle>
                <SAuthor>{barathon.author}</SAuthor>
                <MapBarathons checkpoints={checkpoints}/>
            </SContent>
        </SThumbnail>
    );
};

const THUMBNAIL_WIDTH = 300;
const THUMBNAIL_MIN_HEIGHT = 100;

const SAuthor = styled.p`
    font-size: 14px;
    color: ${colors.white};
`;

const SContent = styled.div`
    padding: 10px 15px;
    box-sizing: border-box;
`;

const STitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.white};
    font-family: ${fonts.title};
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
`;

const SThumbnail = styled.a`
    display: block;
    border-radius: 4px;
    overflow: hidden;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
    width: ${THUMBNAIL_WIDTH}px;
  min-height: ${THUMBNAIL_MIN_HEIGHT}px;
`;

export default Barathon;