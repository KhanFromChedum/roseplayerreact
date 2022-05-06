import React, { useState, useRef, useEffect } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import XYZ from "ol/source/XYZ";
import { Geometry } from "ol/geom";
import { Projection } from "ol/proj";
import Marker from "ol-marker-feature";
import RadioBrowser from "../radio-browser";
import { useGeographic } from "ol/proj";
//import Popup from 'ol-popup';

function WorldMap(props) {
  const func = props.func;

  // set intial state - used to track references to OpenLayers
  //  objects for use in hooks, event handlers, etc.
  const [map, setMap] = useState();
  const [featuresLayer, setFeaturesLayer] = useState();
  const [selectedCoord, setSelectedCoord] = useState();
  useGeographic();
  // get ref to div element - OpenLayers will render into this div
  const mapElement = useRef();
  useEffect(() => {
    const fetchData = async () => {
      const json = await RadioBrowser.AllGeo();

      // create and add vector source layer
      const initalFeaturesLayer = new VectorLayer({
        source: new VectorSource(),
      });

      // create map
      const initialMap = new Map({
        target: mapElement.current,
        layers: [
          // USGS Topo
          new TileLayer({
            source: new XYZ({
              url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            }),
          }),

          initalFeaturesLayer,
        ],
        view: new View({
          projection: "EPSG:3857",
          center: [0, 0],
          zoom: 2,
        }),
        controls: [],
      });

      // save map and vector layer references to state
      setMap(initialMap);

      setFeaturesLayer(initalFeaturesLayer);

      //let mp = json.map(x => [x.geo_long, x.geo_lat]);
      json.forEach((element) => {
        const marker = new Marker([element.geo_long, element.geo_lat]);
        marker.set("info", "I am a marker.");
        marker.setMap(initialMap);
        marker.on("click", function () {
          func(element);
        });
      });
      // console.log(mp);
      // const marker = new Marker([16.351, 48.277]);
      // marker.set("info", "I am a marker.");
      // marker.setMap(initialMap);
    };

    // call the function
    fetchData();
  }, []);

  return <div ref={mapElement} className="map-container"></div>;
}

export default WorldMap;
