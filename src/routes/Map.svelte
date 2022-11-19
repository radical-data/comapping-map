<script>
  import { onMount } from "svelte";

  function unquote(strWithQuotes) {
    var strWithoutQuotes = strWithQuotes.replace(/^"(.*)"$/, "$1");
    return strWithoutQuotes;
  }

  // function chooseImage(title, value) {
  //   let x = "";
  //   console.log(title + value);
  //   if (title.includes("video")) {
  //     x = "./src/images/1254-200.png";
  //   } else {
  //     x = "./src/images/154231-200.png";
  //   }
  //   console.log(x);
  //   // let file = "./src/images/" + x + ".png";
  //   return x;
  // }

  function modifyGeometry(geometry) {
    let title = unquote(JSON.stringify(geometry.properties.input));
    let value = unquote(JSON.stringify(geometry.properties.value));
    // let date = unquote(JSON.stringify(geometry.properties.date));
    let date = new Date(geometry.properties.date);
    let date_to_display = date.toDateString();
    let time_to_display =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    // let image = chooseImage(title, value);
    return geometry
      .config({
        symbol: {
          markerFile: "./src/images/1254-200.png",
          markerWidth: 40,
          markerHeight: 40,
          markerDx: 0,
          markerDy: 0,
          markerOpacity: 1,
        },
        properties: {
          altitude: geometry._coordinates.z,
        },
      })
      .setInfoWindow({
        title: title,
        content:
          '<div class="content">' +
          '<div class="pop_title">' +
          title +
          "</div>" +
          '<div class="pop_time">' +
          "</div><br>" +
          '<div class="pop_dept">' +
          "read on " +
          date_to_display +
          " at " +
          time_to_display +
          // geometry.properties.coordinate.x +
          "</div>" +
          '<div class="pop_dept">' +
          // coordinate.y +
          "</div>" +
          '<div class="arrow"></div>' +
          "</div>",
        // width: 300,
        // 'minHeight': 120,
        custom: true,
        autoOpenOn: "click", //set to null if not to open when clicking on marker
        autoCloseOn: "click",
      });
  }

  let collection;
  let geometries;

  async function fetchData(map) {
    const res = await fetch("./src/data/data-walk_2022-11-14_15-46-7.geojson");
    collection = await res.json();
  }

  onMount(async () => {
    const maptalks = await import("maptalks");

    var map = new maptalks.Map("map", {
      center: [13.443364738583947, 52.504951831988215],
      zoom: 17,
      pitch: 65,
      attribution: false,
      baseLayer: new maptalks.TileLayer("base", {
        urlTemplate:
          "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"],
        // cssFilter: "hue-rotate(180deg) invert(100%) brightness(500%) ",
      }),
    });

    await fetchData();

    geometries = maptalks.GeoJSON.toGeometry(collection, (geometry) => {
      console.log(geometry);
      modifyGeometry(geometry);
    });

    new maptalks.VectorLayer("markers", geometries, {
      // enableAltitude: true,
      altitudeProperty: "altitude",
    }).addTo(map);
  });
</script>

<div id="map" />

<style>
</style>
