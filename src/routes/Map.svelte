<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const maptalks = await import("maptalks");

    var map = new maptalks.Map("map", {
      center: [13.5098581, 52.5278978],
      zoom: 17,
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
      layers: [new maptalks.VectorLayer("markers")],
    });
  });

  //   // function addMarkers(array) {
  //   //   for (i in array) {
  //   //     var new_marker = new maptalks.Marker(i.coordinates, {
  //   //       symbol: {
  //   //         markerType: "x",
  //   //         markerFill: "rgb(135,196,240)",
  //   //         markerFillOpacity: 1,
  //   //         markerLineColor: "#0000ff",
  //   //         markerLineWidth: 5,
  //   //         markerLineOpacity: 1,
  //   //         markerLineDasharray: [],
  //   //         markerWidth: {
  //   //           stops: [
  //   //             [10, 0],
  //   //             [18, 50],
  //   //             [22, 500],
  //   //           ],
  //   //         },
  //   //         markerHeight: {
  //   //           stops: [
  //   //             [10, 0],
  //   //             [18, 50],
  //   //             [22, 500],
  //   //           ],
  //   //         },
  //   //         markerDx: 10,
  //   //         markerDy: 10,
  //   //         markerOpacity: 1,
  //   //       },
  //   //     });
  //   //     map.getLayer("markers").addGeometry(new_marker);
  //   //     console.log(new_marker);
  //   //   }
  //   var m1 = new maptalks.Marker([5.169854983564557, 52.06755688178754], {
  //     symbol: {
  //       markerFile: "src/amelisweerd-building.jpeg",
  //       markerWidth: {
  //         stops: [
  //           [10, 0],
  //           [18, 50],
  //           [22, 500],
  //         ],
  //       },
  //       markerHeight: {
  //         stops: [
  //           [10, 0],
  //           [18, 50],
  //           [22, 500],
  //         ],
  //       },
  //       markerOpacity: 0.8,
  //     },
  //   }).setInfoWindow({
  //     // title: "Marker's InfoWindow",
  //     content:
  //       '<div class="content">' +
  //       '<div class="pop_title">Custom InfoWindow</div>' +
  //       '<div class="pop_time">' +
  //       new Date().toLocaleTimeString() +
  //       "</div><br>" +
  //       '<div class="pop_dept">' +
  //       // coordinate.x +
  //       "</div>" +
  //       '<div class="pop_dept">' +
  //       // coordinate.y +
  //       "</div>" +
  //       '<div class="arrow"></div>' +
  //       "</div>",
  //     // 'autoPan': true,
  //     // 'width': 300,
  //     // 'minHeight': 120,
  //     custom: true,
  //     //'autoOpenOn' : 'click',  //set to null if not to open when clicking on marker
  //     autoCloseOn: "click",
  //   });
  //   //   var m2 = new maptalks.Marker([5.169561, 52.070794], {
  //   //     symbol: {
  //   //       markerFile: "../images/tree.jpg",
  //   //       markerWidth: {
  //   //         stops: [
  //   //           [10, 0],
  //   //           [18, 50],
  //   //           [22, 500],
  //   //         ],
  //   //       },
  //   //       markerHeight: {
  //   //         stops: [
  //   //           [10, 0],
  //   //           [18, 50],
  //   //           [22, 500],
  //   //         ],
  //   //       },
  //   //       markerOpacity: 0.8,
  //   //     },
  //   //   });
  //   //   var m3 = new maptalks.Marker([5.17, 52.071], {
  //   //     symbol: {
  //   //       markerType: "x",
  //   //       markerFill: "rgb(135,196,240)",
  //   //       markerFillOpacity: 1,
  //   //       markerLineColor: "#0000ff",
  //   //       markerLineWidth: 5,
  //   //       markerLineOpacity: 1,
  //   //       markerLineDasharray: [],
  //   //       markerWidth: {
  //   //         stops: [
  //   //           [10, 0],
  //   //           [18, 50],
  //   //           [22, 500],
  //   //         ],
  //   //       },
  //   //       markerHeight: {
  //   //         stops: [
  //   //           [10, 0],
  //   //           [18, 50],
  //   //           [22, 500],
  //   //         ],
  //   //       },
  //   //       markerDx: 10,
  //   //       markerDy: 10,
  //   //       markerOpacity: 1,
  //   //     },
  //   //   });
  //   map.getLayer("markers").addGeometry(m1);
  //   // }

  //   // fetch("./data/data.json")
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   .then((jsondata) => addMarkers(jsondata));

  // // console.log(markers);
  // // var marker_1 = markers.geometry.coordinates;
  // // console.log(marker_1);
</script>

<div id="map" />

<style>
</style>
