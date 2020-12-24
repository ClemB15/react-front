import React from 'react';
import { IBarathon, IPub } from "../types/api";
import styled from "styled-components";
import Barathon from "./Barathon";

interface IProps {
    pubs: IPub[];
    barathons: IBarathon[];
}

const BarathonsList = ({ barathons, pubs }: IProps): JSX.Element => {

    return (
        <>
            <Sh2>Liste des Barathons</Sh2>
            <SBarathonContainer>
                {barathons.map((barathon: IBarathon) => {
                    const BarathonPush = [];
                    {
                        for (let i = 0; i < barathon.checkpoints.length; i++){
                            for (let j = 0; j < pubs.length; j++){
                                if (barathon.checkpoints[i] === pubs[j]._id){
                                    BarathonPush.push(pubs[j]);
                                }
                            }
                        }
                    }

                    return (
                        <Barathon barathon={barathon} pubs={pubs} checkpoints={BarathonPush}/>);
                })}
            </SBarathonContainer>
        </>
    );
};

const SBarathonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  width: 100%;
`;

const Sh2 = styled.h2`
color: white;
text-align: center;
`;

export default BarathonsList;