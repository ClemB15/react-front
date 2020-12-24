import React from "react";
import styled from "styled-components";
import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import { IPub } from "../types/api";
import { colors } from "../styles/colors";
import { LatLngExpression} from "leaflet";

interface IProps{
    checkpoints: IPub[];
}

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const  MapBarathons = ({ checkpoints }: IProps): JSX.Element => {

    const polyline: LatLngExpression[] = checkpoints.map((pub: IPub) => {
        return [pub.latlng.lat, pub.latlng.lng];
    });
    const randid =  '_' + Math.random().toString(36).substr(2, 9);

    return (
        <>
            <SMapContainer>
                <MapContainer
                    center={[44.5667,6.0833]}
                    zoom={13}
                    style={{
                        width:250,
                        height:250
                    }}
                >
                    <TileLayer
                        attribution={ATTRIBUTION}
                        url={TILE_LAYER}
                    />
                    {checkpoints.map((checkpoint) => {
                        return (
                            <Marker position={[checkpoint.latlng.lat, checkpoint.latlng.lng]} key={checkpoint._id + randid}>
                                <Popup>
                                    {checkpoint.name}
                                </Popup>
                            </Marker>
                        );
                    })}
                    <Polyline pathOptions={{color: colors.vibrant}} positions={polyline} />
                </MapContainer>
            </SMapContainer>
        </>
    );
};

const SMapContainer = styled.div`
 margin-bottom: 15px;
`;

export default MapBarathons;