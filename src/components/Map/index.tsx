import React, { useMemo } from 'react';
import GoogleMapReact from 'google-map-react';

import { useMap } from '../../hooks/map';

import Marker from '../Marker';

import { Container } from './styles';

const Map: React.FC = () => {
  const { dataMap } = useMap();

  const { markerData, position, location } = dataMap;

  const googleKey = useMemo(
    () => process.env.REACT_APP_ACCESS_TOKEN_GOOGLE_MAPS as string,
    [],
  );

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: googleKey,
        }}
        defaultCenter={location}
        defaultZoom={5}
      >
        {position && (
          <Marker lng={position.longitude} lat={position.latitude} />
        )}
        {markerData.map(data => (
          <Marker
            key={data.id}
            data={data}
            lng={data.longitude}
            lat={data.latitude}
          />
        ))}
      </GoogleMapReact>
    </Container>
  );
};

export default Map;
