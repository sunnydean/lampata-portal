import { useEffect, useRef } from "react";
import maplibregl, { type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const officeCoordinates = [0.13190011440690916, 52.203402467982464] as const;

const officeMapStyle: StyleSpecification = {
  version: 8,
  sources: {
    openstreetmap: {
      type: "raster",
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: "openstreetmap",
      type: "raster",
      source: "openstreetmap",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export function OfficeMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return;
    }

    const map = new maplibregl.Map({
      container: mapRef.current,
      style: officeMapStyle,
      center: officeCoordinates,
      zoom: 13,
      maxZoom: 19,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
      renderWorldCopies: false,
    });

    map.scrollZoom.enable();
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    const markerElement = document.createElement("div");
    markerElement.className = "office-marker";
    markerElement.innerHTML = `
      <span class="office-marker__shadow"></span>
      <span class="office-marker__pin">
        <span class="office-marker__dot"></span>
      </span>
    `;

    new maplibregl.Marker({
      element: markerElement,
      anchor: "center",
    })
      .setLngLat(officeCoordinates)
      .addTo(map);

    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
        customAttribution: "Lampata office",
      }),
      "bottom-right",
    );

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapRef} className="office-map h-full min-h-[24rem] w-full" />;
}
