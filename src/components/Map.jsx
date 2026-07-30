import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing marker icons in Webpack/Vite builds
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // WickGen SF headquarters coordinates
    const coordinates = [37.7749, -122.4194]; 

    // Initialize Map if not already initialized
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: coordinates,
        zoom: 13,
        zoomControl: false, // Clean look, we can add zoom controls manually or rely on double click
        scrollWheelZoom: false // Prevent accidental scrolling
      });

      // Add dark tiles overlay (leaflet tiles styled in index.css)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);

      // Add a scale control
      L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);

      // Add Marker
      const marker = L.marker(coordinates).addTo(mapRef.current);
      marker.bindPopup("<b class='text-black font-semibold'>WickGen HQ</b><br/><span class='text-gray-600 text-xs'>100 Tech Venture Way, SF</span>").openPopup();
    }

    return () => {
      // Cleanup map on unmount
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden border border-dark-border/60">
      <div ref={mapContainerRef} className="w-full h-full min-h-[350px] z-10" />
    </div>
  );
}
