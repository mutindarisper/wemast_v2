<template>
  <div id="app" class="app">

    <div class="navbar">
       <Navbar />
    </div>
    <div class="selections">
      <DashboardSelections />
    </div>

    <div id="map">

    </div>

    <!-- leaflet side bar -->
    <div class="side-bar-view">
      <SideBarView />
    </div>

    <!-- sidenav goes here -->
    <div id="sidenav" class="sidenav bg-white">
      <div id="mySidenav" style="height: 100%">
        <div id="protrusion" class="bg-white protrusion">
          <div class="toggle_icon" @click.stop="toggle_nav">
            <img id="close" src="./assets/uiIcons/drawer.svg" v-if="!show_sidenav" />
            <img id="open" src="./assets/uiIcons/drawer.svg" v-if="show_sidenav" />
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
                    <div
                      class="text-weight-bolder text-h6"
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
                      class="text-weight-bolder text-h6"
                      @click="handleAnalysisMetaSwap()"
                      style="cursor: pointer; position: absolute; left: 15vw; top: -3vh;"
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

            <p>
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
              <div class="chart2_title_sidebar"  style="font-family: 'Trebuchet MS'; font-weight: 800;">No. of blackspots in {{storeUserSelections.selected_region}} that are {{storeUserSelections.selected_cause}}</div>
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
          


              <!-- <table style="width:100%">
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
                </table> -->
          </div>
          <!-- <LineChart :height="250" :width="250" /> -->
          <p class="partners" style="font-weight:bold;font-size:16px;position: relative;top:53vh;left: 8vw;" >Technical Partners</p>
          <div class="logos_container row">
            <!-- <SideNavLogos /> -->
          </div>
        </div>
      </div>
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
import SideBarView from "./views/SideBarView.vue"
import { close_nav, open_nav } from "./Helpers/SideNavControls";
import { onMounted, ref } from '@vue/runtime-core';
import { useCounterStore } from '@/stores/counter';

//refs go here
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



//variables
const storeUserSelections = useCounterStore()
const mapboxSatellite =  L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}",
       {
         attribution:
           'Powered by <a href="https://imap.co.ke/">IMAP</a> | Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',

         id: "mapbox/satellite-v9",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     );

     const mapbox =  L.tileLayer(
       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
       {
         attribution:
           'Powered by <a href="https://imap.co.ke/">IMAP</a> | Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
         // maxZoom: 18,
         id: "mapbox/streets-v11",
         accessToken:
           "pk.eyJ1IjoiY2hyaXNiYXJ0IiwiYSI6ImNrZTFtb3Z2bDAweTMyem1zcmthMGY0ejQifQ.3PzoCgSiG-1-sV1qJvO9Og",
       }
     );

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
//hooks
onMounted( () => {
  map = L.map("map", {
        zoomControl: false,
        // layersControl: false,
        center: [0.02, 37.8582273],
        // minZoom: 6.5,
        // maxZoom: 20,
        zoom: 6,
        // measureControl: true,
        // defaultExtentControl: true,
        layers: mapboxSatellite
      }); // add the basemaps to the controls

       //add sidebar
       AddSideLeafletSideBar();

closeNav();
})

</script>

<style scoped>
  .app{
    height: 100vh;
    width: 100vw;
    position: fixed;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  .navbar{
    position: absolute;
    top: 3vh;
    left: -0.3vw;
  }
  .selections{
    position: absolute;
    top: 7vh;
    left: -0.3vw;
  }
  #map{
    position: absolute;
    top: 24vh;
    left:-0.3vw;
    width: 99vw;
    height: 75vh;
  }


  /* side nav */
  .toggle_icon{
    position: absolute;
    top: 4vh;
    left: -0.2vw;
    padding: 5px;
    background-color: #fff;
    border-radius: 50%;
  }
.sidenav {
  height: 100%;
  position: fixed;
  z-index: 3000;
  top: 90px;
  right: 0;
  caret-color: transparent;
  background-color:#fff;
}
#mySidenav {
  transition: width 0.3s;
}
.sidenav_body {
  height: 90%;

  margin-left: 20px;
  overflow-y: scroll;
  position: relative;
  scrollbar-width: thin;
  scrollbar-color: steelblue white;
}
.sidenav_body::-webkit-scrollbar {
  width: 5px;
}
.sidenav_body::-webkit-scrollbar-track {
  background: white; /* color of the tracking area */
}

.sidenav_body::-webkit-scrollbar-thumb {
  background-color: steelblue; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 1px solid rgb(224, 213, 193); /* creates padding around scroll thumb */
}
.protrusion {
  top: 110px;
  position: absolute;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
}
#close {
  margin-top: 9px;
  margin-left: 8px;
}
#open {
  margin-top: 9px;
  margin-left: 8px;
  transform: rotate(180deg);
}
@media screen and (max-height: 800px) {
  .logos_container {
    margin-bottom: 25px;
    margin-top: 10px;
  }
}
@media screen and (min-height: 901px) {
  .logos_container {
    position: absolute;
    bottom: 0;
    margin-left: 25%;
  }
}
#mapContainer >>> .base_layer_list {
  list-style: none;
  font-size: 15px;
  padding: 5px;
}
.side_nav_swap {
  color: #1481c3;
  border-bottom: solid 3px #1481c3;
  padding-bottom: 6px;
  font-weight: bolder;
  font-size: 18px;
}


</style>
