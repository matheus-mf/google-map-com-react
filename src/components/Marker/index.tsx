import React from 'react';

import pinIcon from '../../assets/pin.svg';
import packageIcon from '../../assets/package.svg';
import { IMarkerData } from '../../hooks/map';

import { Container } from './styles';

interface IMarker {
  data?: IMarkerData;
  lng: number;
  lat: number;
}

const Marker: React.FC<IMarker> = ({ data, lng, lat }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container lng={lng} lat={lat}>
      {data ? (
        <img src={packageIcon} alt="Icone package" />
      ) : (
        <img src={pinIcon} alt="Icone pin" />
      )}
    </Container>
  );
};

export default Marker;
