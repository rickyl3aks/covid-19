import { MapContainer, TileLayer, Marker, Popup } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({longitude, latitude, outcome}) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "250px", width: "250px" }}
    >
       <TileLayer
        url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]} draggable={true} animate={true}>
        <Popup>{outcome}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;