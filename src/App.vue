<template>
  <div id="app" class="app">

    <div class="navbar">
       <Navbar />
    </div>
    <div class="selections">
      <DashboardSelections />
    </div>
    <div class="advanced_filter" @click="show_advanced_filter" >
      <p>Advanced Filter</p> </div>
    <div class="compare"  @click="show_compare"> 
      <p>Compare</p>
    </div>

    <!-- <button class="request" type="button" @click="getRegion2" >REQUEST</button> -->


    <div  class="spinner" v-if="loading">
            <img src="/uiIcons/loader_white.svg" alt="">
        </div>

    <!-- <h1 class="header_countries">{{storeUserSelections.indicator_list}}</h1> -->

    <div id="map">
      <div class="opacity">
        <span id="opacity">Opacity:</span>
        <span id="image-opacity"> </span>
        <input type="range" id="sldOpacity" min="0" max="1" step="0.1" value="1" />
       </div>
       <!-- map controls to be returned if need be -->
      <!-- <div class="map_controls"> 
    
       <img  title="Download tif" id="map_icons" src="./assets/mapIcons/download_tif.svg" alt="" class="download_tiff">
       <img title="Download Map" id="map_icons" src="./assets/mapIcons/download_map.svg" alt="" class="download_map">
       <img title="Measure Distance" id="map_icons" src="./assets/mapIcons/ruler.svg" alt="" class="measure">
       <img title="" id="map_icons" src="./assets/mapIcons/layers-24px.svg" alt="" class="layers"
        @mouseover="base_map_ctrl_selections = true"
        @mouseleave="handle_baseLayers">
       <img title="Draw Polygon" id="map_icons" src="./assets/mapIcons/square.svg" alt="" class="draw_polygon">
       <img title="Zoom in" id="map_icons" src="./assets/mapIcons/add-24px.svg" alt="" class="zoom_in" @click="zoom_in">
       <img title="Zoom out" id="map_icons" src="./assets/mapIcons/remove-24px.svg" alt="" class="zoom_out" @click="zoom_out">
       <img title="Help" id="map_icons" src="./assets/mapIcons/help.svg" alt="" class="help">
      </div> -->

      
      <!-- <div
        class="base_map_ctrl_selections"
        v-if="base_map_ctrl_selections"
        @mouseover="
          (base_map_ctrl_selections = true), (base_map_ctrl_cliked = true)
        "
        @mouseleave="
          (base_map_ctrl_selections = false), (base_map_ctrl_cliked = false)
        "
      >
        <div v-for="base_map in Object.keys(baseMaps)" :key="base_map">
          <div class="base_map" @click="change_base_map(base_map)">
            <div class="base_map_name">{{ base_map }}</div>
          </div>
        </div>
      </div> -->

    </div>

    <!-- leaflet side bar -->
    <div class="side-bar-view">
      <SideBarView />
    </div>

    <!-- sidenav goes here -->
    <div id="sidenav" class="sidenav">
      <div id="mySidenav" style="height: 100%">
        <div id="protrusion" class="bg-white protrusion">
          <div class="toggle_icon" @click.stop="toggle_nav">
            <img style="margin-left:2px" id="close" src=" /uiIcons/drawer.svg" v-if="!show_sidenav" />
            <img id="open" src=" /uiIcons/drawer.svg" v-if="show_sidenav" />
          </div>
        </div>
        <div class="sidenav_body" v-if="!show_sidenav">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div class="row" v-if="show_search">
                <div class="col-xs-6 offset-3">
                  <input dense outlined v-model="search" label="Search" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="q-pa-xs">
                    <div class="data_analysis_text"
                     
                      @click="handleAnalysisMetaSwap2()"
                      style="cursor: pointer"
                    >
                      <span
                        :class="
                          analysis_swap_toggle === 'data_analysis'
                            ? 'side_nav_swap'
                            : ''
                        "
                        >Data Analysis</span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="q-pa-xs">
                    <div
                      class="metadata_text"
                      @click="handleAnalysisMetaSwap()"
                      style=""
                    >
                      <span
                        :class="
                          analysis_swap_toggle === 'metadata'
                            ? 'side_nav_swap'
                            : ''
                        "
                        >Metadata </span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  v-if="analysis_swap_toggle === 'data_analysis'" >
            <!-- <q-btn flat label="get WMS" @click="getWMS_Layer" />    -->

            <p style="margin-top:40px">
              <label style="margin-top:40px; font-weight: 700;">Summary</label>
              <br>
              {{ summary_text }}
            </p>
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <div class="chart_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">{{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}  </div>
            </label>
            
            <div class="charts_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()"> ref="charts"   v-if="charts" to be added later -->
            <!-- <div class="chart_title">No. of blackspots in {{storeUserSelections.selected_region}} that are {{storeUserSelections.selected_cause}}</div> -->
            <!-- <CausesChart 
            :height="200"
            :width="300"
            :chartData="chartData"
            :options="options"

            /> -->
          </div>

         
            <br />
            <label class="text-bold" style="font-family: Montserrat; font-weight: 800;">
              <div class="chart2_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">  {{storeUserSelections.selected_cause}} blackspots in {{storeUserSelections.selected_region}}</div>
            </label>
            
            <div class="charts2_sidebar"  >
            <!-- <img class="close_chart" src="../assets/images/close_small.svg" alt="" @click="close_chart()">  ref="charts"   v-if="charts" to be added later -->
            <!-- <div class="chart_title">No. of blackspots in {{storeUserSelections.selected_region}} that are {{storeUserSelections.selected_cause}}</div> -->
            <!-- <CausesBar 
            :height="200"
            :width="300"
            :chartData="chartData"
            :options="barchart_options"

            /> -->
          </div>
           
          </div>
          <div class="meta" v-if="analysis_swap_toggle === 'metadata'">
          


              <table style="width:100%">
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS</th>
                    <td>{{storeUserSelections.crs}}</td>
                    
                  </tr>
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS</th>
                    <td>{{storeUserSelections.crs}}</td>
                    
                  </tr>
                  <tr>
                    <th>Region</th>
                    <td> {{storeUserSelections.selected_region}}</td>
                    
                  </tr>
                  <tr>
                    <th>Cause</th>
      
                    <td>{{storeUserSelections.selected_cause}}</td>
                  </tr>
                  <tr>
                    <th>CRS
                      
                    </th>
                    
                    <td>
                      <table>
                        <tr>
                          <th>Region</th>
                          <td>{{storeUserSelections.selected_region}}</td>
                        </tr>
                        <tr>
                          <th>Cause</th>
                          <td>{{storeUserSelections.selected_cause}}</td>
                        </tr>
                        <tr>
                          <th>CRS</th>
                          <td>{{storeUserSelections.crs}}</td>
                        </tr>
                      </table>
                    </td>
                    
                    
                  </tr>
                </table>
          </div>
          <!-- <LineChart :height="250" :width="250" /> -->
          <p class="partners" style="font-weight:bold;font-size:16px;position: relative;top:53vh;left: 8vw;" >Technical Partners</p>
          <div class="logos_container row">
            <!-- <SideNavLogos /> -->
          </div>
        </div>
      </div>
    </div>

    <!-- advanced filter -->
    <div v-if="advanced_filter" class="advanced_filter_container">
      <img class="close_advanced_filter" src=" /uiIcons/close.png" alt="" @click="close_advanced_filter">
      <AdvancedFilter />
    </div>

    <!-- compare -->
    <div v-if="compare" class="compare_container">
      <img class="close_compare" src=" /uiIcons/close.png" alt="" @click="close_compare">
      <Compare />
    </div>

  </div>
  
  
  
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import DashboardSelections from './components/DashboardSelections.vue';
import "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-sidebar-v2";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw-src.css";
import "leaflet-draw";
import "leaflet.wms"
// import "leaflet-draw/dist/leaflet.draw";
import SideBarView from "./views/SideBarView.vue"
import { close_nav, open_nav } from "./Helpers/SideNavControls";
import { leaflet_custom_controls } from "./CustomMapControls/LeafletCustomControls"
import { onMounted, ref, watch, computed } from '@vue/runtime-core';
import { useCounterStore } from '@/stores/counter';
import AdvancedFilter from './components/AdvancedFilter.vue';
import Compare from './components/Compare.vue';

//refs go here
let advanced_filter = ref(false)
let compare = ref(false)
let map;
let sidebar = ref(null)
let show_sidenav = ref(false)
let analysis_swap_toggle = ref("data_analysis") 
let show_search = ref(false)
let search = ref("")
let summary_text =  ` Land use land cover maps monitor the land use in a specific year. The
      integration of the biophysical and human factors plays a leading role in
      causing land-use changes, and is used to explain the dynamics of land use
      that occur within a river basin or a wetland. The study of land cover may
      also be used to predict future trends of an ecosystem while understanding
      its sustainability.`
let show_base_layers = ref(true)
let baseMaps =ref({}) 
let base_map_ctrl_selections= ref(false) //show or hide base layers
let base_map_ctrl_cliked = ref(false)
let current_top_base_layer= ref(null) //holds the current later at the top
let previous_wemast_ctrl_id = ref(null)  //holds the id of the element clicked  prevously
let current_raster_layer = ref(null) //holds curren requested layer geoserver
let show_draw_control= ref(false) //toggles draw control visibility
let editableLayers = ref(null) //draw control
window.type = true;
var current_geojson = ref(null)
let loading = ref(false)
let wmsLayer= ref(null);



//variables
const storeUserSelections = useCounterStore()

console.log(storeUserSelections.fetchCountriesList)

console.log(storeUserSelections.getLoadingState, 'getLoadingState')

const show_advanced_filter = () =>{
  advanced_filter.value = true
}
const show_compare = () =>{
  compare.value = true
}
const close_advanced_filter = () =>{
  advanced_filter.value = false
}
const close_compare = () =>{
  compare.value = false
}

let osm = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        }
      );
const mapboxSatellite =  L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

         id: "mapbox/satellite-v9",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     );

     const mapbox =  L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
       {
         attribution:
           'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
         // maxZoom: 18,
         id: "mapbox/streets-v11",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     );

    
    //  baseMaps.value = {
    //     OpenStreetMap: osm,
    //     MapBox: mapbox,
    //     MapBoxSatellite: mapboxSatellite,
    //   };
//sidebar functionality
const toggle_nav = (e)  => {
      console.log(" toggle_nav ", e.target.id);
      const cmd = e.target.id;
      if (cmd === "close") return closeNav();
      return openNav();
    }

   const openNav = () => {
      sidebar.value.open("home");
      show_sidenav.value = false;
      open_nav();
    }

    const closeNav = () => {
      sidebar.value.close("home");
      close_nav();
      show_sidenav.value= true;
    }
    const handleAnalysisMetaSwap = () => {
      analysis_swap_toggle.value = 'metadata';
    }
    const handleAnalysisMetaSwap2 = () => {
      analysis_swap_toggle.value = 'data_analysis';
    }


    const AddSideLeafletSideBar = () => {
      sidebar.value = L.control.sidebar({
        container: "sidebar",
        position: "right",
      });
      map.addControl(sidebar.value);
    }
    const zoom_in = () => {
      map.setZoom(map.getZoom() + 1);
    }
    const zoom_out = () => {
      map.setZoom(map.getZoom() - 1);
    }

    const handle_baseLayers = () =>{
      setTimeout(() => {
        if (base_map_ctrl_cliked.value === false)
          base_map_ctrl_selections.value = false;
      }, 500);
    }
    const change_base_map = (base_map) => {
      const index = Object.keys(baseMaps.value).indexOf(base_map);

      let layerControlElement = document.getElementsByClassName(
        "leaflet-control-layers"
      )[0];
      layerControlElement.getElementsByTagName("input")[index].click();
    }
    //draw control
    const draw_polygon = () => {
      if (!show_draw_control.value) {
        const draw_ctrl = document.getElementsByClassName("leaflet-draw");
        draw_ctrl[0].style.visibility = "hidden";
      } else {
        const draw_ctrl = document.getElementsByClassName("leaflet-draw");
        draw_ctrl[0].style.visibility = "visible";
      }
      show_draw_control.value = !show_draw_control.value;
    }

   const addDrawCtrl = () => {
      //we add the polygon draw feature to map as seen  below
      editableLayers.value = new L.FeatureGroup();
      map.addLayer(editableLayers.value);
      let options = {
        position: "topright",
        draw: {
          polyline: false,
          polygon: {
            allowIntersection: false, // Restricts shapes to simple polygons
            showArea: true,
            drawError: {
              color: "#e1e100", // Color the shape will turn when intersects
              message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
            },
            shapeOptions: {
              color: "black",
              fillColor: "none",
            },
          },
          circle: false, // Turns off this drawing tool
          rectangle: false,
          marker: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: editableLayers.value, //REQUIRED!!
          edit: {},
        },
      };
      let drawControl = new L.Control.Draw(options);
      map.addControl(drawControl);

      map.on(L.Draw.Event.CREATED, (e) => {
        const layer = e.layer;
        editableLayers.value.addLayer(layer);
        // if (process.env.DEV)
        //   console.log(JSON.stringify(layer.toGeoJSON().geometry));
      });

    map.on(L.Draw.Event.EDITSTOP, (e) => {
        // if (process.env.DEV) console.log("stop edit", e);
      });
      map.on(L.Draw.Event.DELETED, (e) => {
        // if (process.env.DEV) console.log(" deleted ", e);
        //remove the control from map and remove focus on the draw icon by changing color
        draw_polygon();
        document.getElementById("draw_polygon").style.backgroundColor = "white";
      });
    }

//switch between base layers
   const wemast_base_layers = () => {
      if (!show_base_layers.value)
        document.getElementById("show_base_layers").style.display = "none";
      if (show_base_layers.value) {
        document.getElementById("show_base_layers").style.display = "block";
        document.getElementById("show_base_layers").style.marginRight = "-4px";

        //create the base map list and render
        const base_layers = Object.keys(baseMaps.value);
        let layer_html = `<ul class=base_layer_list>`;
        base_layers.forEach((layer, i) => {
          layer_html += `<li id=base_layer-${layer}>
          <div class=base_map>
          <div class="base_map_name" ><input type="radio" name="base_map" id="checkbox-${layer}" ${
            current_top_base_layer.value === layer ? "checked" : ""
          } ></div>
          <div class="col-xs-10 q-ml-sm">
           ${layer} ${
            base_layers.length - 1 != i ? "<hr class=full-width> <br> " : ""
          }
           </div>
          </div>
           </li>`;
        });
        layer_html += `</ul>`;
        document.getElementById("show_base_layers").innerHTML = layer_html;

        document
          .getElementById("show_base_layers")
          .addEventListener("mouseleave", (e) => {
            document.getElementById("show_base_layers").style.display = "none";
          });
      }

      show_base_layers.value = !show_base_layers.value;
    }


    const change_base_layer = (id) => {
      current_top_base_layer.value = id;
      const base_map = id.split("-")[1];
      current_top_base_layer.value = base_map;
      console.log("change base map ", base_map);
      const index = Object.keys(baseMaps.value).indexOf(base_map);

      let layerControlElement = document.getElementsByClassName(
        "leaflet-control-layers"
      )[0];
      layerControlElement.getElementsByTagName("input")[index].click();

      map.eachLayer(function (layer) {
        console.log("layer ", layer);
      });
    }

   const AddCustomRightControls = () => {
      const leaflet_controls = L.control({ position: "topright" });
      leaflet_controls.onAdd = () => {
        let div = L.DomUtil.create("div", "WeMAST_zoom");
        div.innerHTML = leaflet_custom_controls;
        return div;
      };

      leaflet_controls.addTo(map);
      const right_ctrls = document.querySelector(".map_controls");
      right_ctrls.addEventListener("click", (event) => {
        const id = event.target.id;
        // if (process.env.DEV) console.log("target id ", id);
        if (
          ![
            "zoom_in",
            "zoom_out",
            "download_map",
            'download_tiff',
            "wemast_base_layers",
          ].includes(id)
        ) {
          try {
            document.getElementById(`${id}`).style.backgroundColor =
              "steelblue";
          } catch (err) {}
        }

        if ([`${id}`]) {
          [id];
        }
        if (id.startsWith("checkbox")) {
          change_base_layer(id);
        }
        if (
          (previous_wemast_ctrl_id.value &&
            previous_wemast_ctrl_id.value != id) ||
          (previous_wemast_ctrl_id.value && previous_wemast_ctrl_id.value === id)
        ) {
          document.getElementById(
            previous_wemast_ctrl_id.value
          ).style.backgroundColor = "white";
        }

        previous_wemast_ctrl_id.value = id;
      });
    }
//hooks
onMounted( () => {

  baseMaps.value = {
        OpenStreetMap: osm,
        MapBox: mapbox,
        MapBoxSatellite: mapboxSatellite,
      };
  map = L.map("map", {
        zoomControl: false,
        layersControl: false,
        center: [0.02, 37.8582273],
        // minZoom: 6.5,
        // maxZoom: 20,
        zoom: 6,
        // measureControl: true,
        // defaultExtentControl: true,
        layers: [mapboxSatellite]
      }); // add the basemaps to the controls

      L.control.layers(baseMaps.value).addTo(map);
       ///////////////////hide layers control
      //  var layerControl = document.getElementsByClassName(
      //   "leaflet-control-layers"
      // );
      // layerControl[0].style.visibility = "hidden";

    current_top_base_layer.value = "MapBoxSatellite";
    AddCustomRightControls();

       //add sidebar
       AddSideLeafletSideBar();

closeNav();

document
      .getElementById("wemast_base_layers")
      .addEventListener("mouseover", (e) => {
        console.log("mouseover ");
        show_base_layers.value = true;
        wemast_base_layers();
      })

      document
      .getElementById("zoom_in")
      .addEventListener("click", (e) => {
        console.log("click ");
        
        zoom_in();
      });

      document
      .getElementById("zoom_out")
      .addEventListener("click", (e) => {
        console.log("click ");
        
        zoom_out();
      });

      document
      .getElementById("draw_polygon")
      .addEventListener("click", (e) => {
        console.log("click ");
        
        addDrawCtrl();
        // draw_polygon();
      });

      

    // addDrawCtrl(); //adds draw control to map
    draw_polygon(); //hides draw controls

    // map.on("baselayerchange", (e) => {
    //   console.log("Layer in basechange ", current_raster_layer.value);
    //   if (current_raster_layer.value) {
    //     current_raster_layer.value.bringToFront(); //current_raster can be tracked and brought to front
    //   }
    // });
})


    //function to get regions 

    const getRegion = () => {  
 
//  loading = true
 // console.log(loading.value, 'loading')
//  if(kiambu)map.removeLayer(kiambu)
//  if(kiambu_points.value)map.removeLayer(kiambu_points.value)
 if(current_geojson.value)map.removeLayer(current_geojson.value)
//  if(current_point_geojson.value)map.removeLayer(current_point_geojson.value)

 var selecteRegion = storeUserSelections.getSelectedRegion
 console.log(selecteRegion, 'selected region app')
//  loading = storeUserSelections.getLoadingState

 // console.log(region)
 current_geojson.value = L.geoJSON(selecteRegion, {
         style: {
           color: "black",
           opacity: 0.8
         }
        //  pane: 'right'
          })
 

 current_geojson.value.addTo(map)
// loading = false

           map.fitBounds(current_geojson.value.getBounds(), {
                           padding: [50, 50],
                         }); 
 
}

const getRegion2 = () => {  
 
 //  loading = true
  // console.log(loading.value, 'loading')
 //  if(kiambu)map.removeLayer(kiambu)
 //  if(kiambu_points.value)map.removeLayer(kiambu_points.value)
  if(current_geojson.value)map.removeLayer(current_geojson.value)
 //  if(current_point_geojson.value)map.removeLayer(current_point_geojson.value)
 
  var selecteRegion = storeUserSelections.getSelectedRegion
  console.log(selecteRegion, 'selected region app')
 //  loading = storeUserSelections.getLoadingState
 
  // console.log(region)
  current_geojson.value = L.geoJSON(selecteRegion, {
          style: {
            color: "magenta",
            opacity: 0.8
          }
         //  pane: 'right'
           })
  
 
  current_geojson.value.addTo(map)
 // loading = false
 
            map.fitBounds(current_geojson.value.getBounds(), {
                            padding: [50, 50],
                          }); 
  
 }
 


//watch for changes

const setSelectedRegion = computed( () => {
  console.log(storeUserSelections.selected_basin, 'selected_basin homeviiew')
  // if(storeUserSelections.selected_region === 'Nyeri'){
  //     $("#select2").show();
  //   }else{
  //     $("#select2").hide();
  //   }
  return storeUserSelections.getSelectedRegion
})
watch( setSelectedRegion , () => {
  getRegion()
  
})


//watch state for loading

const setLoadingState= computed( () => {
  return storeUserSelections.getLoadingState
})

 watch( setLoadingState , () => {
  console.log(storeUserSelections.getLoadingState, 'getLoadingState')
  loading.value = storeUserSelections.getLoadingState
  
})


const getKwaleRaster = () => {

// if(wmsLayer.value)map.removeLayer(wmsLayer.value)

// var selectedLayer= storeUserSelections.getSelectedLayerName
// console.log(selectedLayer, 'selected geoserver layer home')
              
// var kwaleRaster = storeUserSelections.getSelectRaster
wmsLayer.value = L.tileLayer.wms("http://localhost:8005/geoserver/rasters/wms", {
      // pane: 'left',
      layers: 'rasters:kiambu_clip1',
      format: 'image/png',
      transparent: true,  
      opacity:1
});
wmsLayer.value.addTo(map);



}

</script>

<style scoped>
  @import "./assets/main.css";
  

</style>
