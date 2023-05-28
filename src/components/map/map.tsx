import { useRef, useEffect, useState } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import useMap from '../../hooks/useMap';
import { Places } from '../../types/place';
import { UrlMarker, COORDS_CENTER_MAP } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  locations: Places;
  activeLocationId: string;
  setActiveLocation: (id: string) => void;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [23, 42],
  iconAnchor: [23, 40],
});

const activeCustomIcon = new Icon({
  iconUrl: UrlMarker.Active,
  iconSize: [23, 40],
  iconAnchor: [23, 40],
});

function Map ({ locations, activeLocationId, setActiveLocation }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, COORDS_CENTER_MAP);

  const [markerLayers, ] = useState<LayerGroup>(new LayerGroup());

  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const [ latitude, longitude ] = location.location.coords;
        const marker = new Marker({
          lat: latitude,
          lng: longitude,
        });
        marker.on('click', (evt) => setActiveLocation(location.id));
        marker
          .setIcon(
            activeLocationId !== undefined && activeLocationId === location.id
              ? activeCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayers);
      });
      markerLayers.addTo(map);
    }
  }, [map, locations, activeLocationId, markerLayers]);

  return (
    <div
      className="map__container"
      style={{ width:'100%' }}
      ref={ mapRef }
    >
    </div>
  );
}

export default Map;
