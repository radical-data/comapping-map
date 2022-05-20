import "./style.css";

import * as maptalks from "maptalks";

var map = new maptalks.Map("map", {
  center: [5.169561, 52.070794],
  zoom: 16,
  pitch: 65,
  attribution: false,
  baseLayer: new maptalks.TileLayer("base", {
    urlTemplate:
      "http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
    subdomains: ["a", "b", "c", "d"],
    // attribution:
    //   '&copy; <a href="http://www.osm.org/copyright">OSM</a> contributors, ' +
    //   '&copy; <a href="https://carto.com/attributions">CARTO</a>',
  }),
});
