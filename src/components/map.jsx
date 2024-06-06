import { useEffect, useRef, useReducer } from 'react';

// Leaflet imports
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// Variables
import iconImg from '../assets/icon-location.svg';
const markerIcon = new Icon({ iconUrl: iconImg, iconSize: [50, 60] });

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'setCoords':
      return action.payload;
    default:
      return state;
  }
};

const Map = ({ userCoords }) => {
  const [coords, dispatch] = useReducer(reducer, [0, 0]);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!userCoords) return;

    dispatch({ type: 'setCoords', payload: userCoords });

    mapRef?.current?.flyTo(userCoords, 16, {
      duration: 2,
    });
  }, [userCoords]);

  return (
    <MapContainer
      ref={mapRef}
      center={coords}
      zoom={13}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coords} icon={markerIcon}></Marker>
    </MapContainer>
  );
};

export default Map;
