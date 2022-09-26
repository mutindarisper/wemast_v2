import { defineStore } from 'pinia'
import axios from 'axios'


var baseurl = 'http://45.63.48.25:8080'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    placeholder: 'select region',
    countries: [],
    selected_region: '',
    current_geojson:{},
    cause_placeholder: 'select cause',
    causes:[],
    selected_cause:'',
    current_point_geojson:{},
      //chart
      testData:{
        color_info_fromServer:{},
          names_candidates:[],
          chartDataFromServer:[],
          chatData_restructure: {
             labels:[],
             datasets:[]

          },

          options: {
          
           legend: {
               display: true,
               position: 'right',
               margin: 20,
               labels:{
                  fontColor: '#000',
                  fontWeight: 'bolder',
                  padding: 15,
                  usePointStyle: true,
                  pointStyle: 'circle'
               }
            },
            
            responsive: true,
            maintainAspectRatio: false,
          
         }
      },

      barchart_options: {
        scales: {
           xAxes: [{
            //   stacked: true,
              
              
              ticks: {
                 beginAtZero: true,
              
                 fontColor: '#000',
              },
              gridLines: {
                 display: false,
                  color: '#9b9797'
              }
           }],
           yAxes: [{
            //   stacked: true,
              
                   barPercentage: 0.7,
                 
               ticks: {
                  beginAtZero: true,
                   
                 // fontColor: '#2FA036',
                 fontSize: 10,
              },
              gridLines: {
                 display: true,
                 color: '#9b9797'
                 
              }
           }]
        },
 
       legend: {
           display: false,
       
        },
        
        responsive: true,
        maintainAspectRatio: false,
      
     },
      //spinner loader
      loading:false,
      kwale_geojson:{},
      kwale_raster: null,
      layers:[],
      selected_layer:'',
      selected_raster:null,
      geoserver_regions:[],
      selected_geoserver_region: '',
      current_geoserver_geojson:{},
      crs:"",
      
      indicator_list: [], //wemast_v2_lists "Limpopo","Cuvelai","Zambezi", "Okavango",'South Africa', 'Kiambu'
      sub_indicator_list:[],
      year_list:[],
      region_placeholder:'Cuvelai',
      selected_basin:'',
      indicator_placeholder:'Exposure',
      selected_indicator:'',

      sub_indicator_placeholder:'Land Cover',
      selected_sub_indicator:'',

      year_placeholder:'2019',
      selected_year:''
  }),
 
  actions: {
    increment() {
      this.counter++
    },

    fetchCountriesList() {
      this.countries =  ["Limpopo","Cuvelai","Zambezi", "Okavango",'South Africa', 'Kiambu','Laikipia']
      return this.countries

    },
    fetchIndicatorList(){
      this.indicator_list = ['Exposure', 'Sensitivity','Resiliance','pogba']
    },
    fetchSubIndicatorList(){
      this.sub_indicator_list = ['Land Cover', 'Vegetation Cover', "Wetland Inventory"]
    },
    fetchYearList(){
      this.year_list = ['2019','2020', '2021', "2022"]
    },


    fetchKiambuCounty() {
      const sendGetRequest = async () => {
        try {
          // this.loading = true 
            const resp = await  axios.get(baseurl+'/AdminData/get_adm1_shapefile?Get_county=Kiambu'
            );
            

            this.current_geojson = resp.data
            console.log(resp.data, 'await response data');
           
        } catch (err) {
            // Handle Error Here
            console.error('an error occured'+err);
        }
        // finally  { if (this.current_geojson)this.loading = false
      
        // }
        return resp.data
    };

    sendGetRequest();

    },
    showSelectedCountry(option){
     this.region_placeholder = option;
				console.log(option, 'selected basin ')
      // var selected_country = $event.target.value
      // console.log(selected_country, 'selected country')
      // this.countries =  selected_country
      this.selected_basin =  option
      console.log(this.selected_basin , 'changed selected basin')
      // // return selected_country
      var data = this.selected_basin
     
//using async await

      if(data) {
        const sendGetRequest = async () => {
          try {
            this.loading = true;
              const resp = await  axios.get(baseurl+'/AdminData/get_adm1_shapefile?Get_county='+data
              );
              

              this.current_geojson = resp.data
              console.log(resp.data, 'await response data');
              this.loading = false;
              // this.crs = resp.data.crs.properties.name
              // console.log(this.crs, 'crs')
              return resp.data
          } catch (err) {
              // Handle Error Here
              console.error('an error occured'+err);
          }
          // finally  { if (this.current_geojson)this.loading = false
        
          // }
      };

      sendGetRequest();

      }

      

    },
    showSelectedIndicator(option) {
      this.indicator_placeholder = option;
      console.log(option, 'selected indicator ')

      this.selected_indicator =  option
      console.log(this.selected_indicator , 'changed selected indicator')
    },

    showSelectedSubIndicator(option) {
      this.sub_indicator_placeholder = option;
      console.log(option, 'selected sub-indicator ')

      this.selected_sub_indicator =  option
      console.log(this.selected_sub_indicator , 'changed selected sub-indicator')
    },
    showSelectedYear(option) {
      this.year_placeholder = option;
      console.log(option, 'selected year ')

      this.selected_year=  option
      console.log(this.selected_year , 'changed selected year')
    },

    

    fetchCausesList() {
      var data = this.selected_region
      
      const getCausesList = async () => {
        try {
          
          // this.loading = true 
        
            const resp = await  axios.get(baseurl+'/HotSpots/get_hotspot_per_county/?list_causes_per_county='+data
            );

            this.causes = resp.data.Causes
            console.log(resp.data.Causes, 'causes response data');
            return resp.data.Causes
        } catch (err) {
            // Handle Error Here
            console.error('an error occured'+err);
        }
        // finally  { if (this.current_geojson)this.loading = false
        
        // }
        
    };

    getCausesList();

    },

    showSelectedCause($event) {
      var selected_causes = $event.target.value
      console.log(selected_causes, 'selected cause')

      this.selected_cause = selected_causes 
      console.log(this.selected_cause , 'changed selected cause')

      var data = this.selected_region
      var cause = this.selected_cause


      const getPointsCause = async () => {

        try {
          const response = await axios.get(baseurl+'/HotSpots/get_hotspot_per_county/?hotspot_per_cause='+cause+'&county='+data
          );
          this.current_point_geojson = response.data
          console.log(response.data, 'point data')
          return response.data
          
        } catch (error) {
          console.error('an error occured'+error);
          
        }
      }
      getPointsCause();



      const getCountyStats =  async () =>  {
        
        var data = this.selected_region
        var cause = this.selected_cause

        if ( data && cause) {

          const outPut = await axios.get(baseurl+'/HotSpots/get_statics/?county='+data+'&cause='+cause)
     
             .then((response) => {
                  const responseData = response.data.statistics

                 this.testData.chartDataFromServer = responseData 
                 // console.log(responseData , 'causes statistics')   
                 
                  var stats_data = {'labels':[], 'values':[]}

                   responseData.map( item => {
                      const key =  Object.keys( item)
                      stats_data[key] = item[key]

                      
              //  console.log(item[key] , 'value')
              // only add data that is greater than 0 to the data structure.
                    if (item[key]> 0){
                       stats_data['labels'].push(key[0])
                          
                          stats_data['values'].push(item[key])
                    }

                    })

                    console.log(stats_data, 'labels and data')
                     var Labels = stats_data.labels
                     
                     var Data = stats_data.values
                
                  setTimeout(() => {


                 // test for chart dynamically
                 var chartDataNew = this.testData.chartDataFromServer

                 var mychart_data = []   //no. of blackspots per road

                 // generate names for road labels 
                 var names_labels = []

                 // const places_names = Object.keys(chartDataNew[0]).slice(1)
                 
                 // chartDataNew.map((name =>{

                 //    var majina = Object.values(name).slice(0,1)
                    
                    
                 //    names_labels.push(majina[0])

                  
                    

                 // }))

                 var Doughnut_data = {}

                 var colors_a = ['#ffbb33', '#99cc00', '#ffc7c8', '#33b5e5',  '#ABCDC6', '#ffc7c8', '#9a5fb8', '#32a6b5',  '#ABEBC6']


                 chartDataNew.map((item =>{

                    var data_values = Data //Object.values(item).slice(1)
                          
                    
                 }))

                 this.testData.chatData_restructure.labels = Labels 
                 this.testData.chatData_restructure.datasets= Data

                
                 var datasetStructure =  [{
                       data: Data,
                          label: Labels,
                          backgroundColor:colors_a,
                          fill:true
                    }]
                  
                    this.testData.chatData_restructure.labels = Labels

                 console.log(this.testData.chatData_restructure.labels, 'labels only')
                 this.testData.chatData_restructure.datasets= datasetStructure
                  console.log(this.testData.chatData_restructure.datasets, 'data only')

                //  this.renderChart(testData.chatData_restructure, testData.options)
                 console.log( this.testData.chatData_restructure, 'DATA TYPE OF CHART' )
         
                     }, 1000)

             })
            .catch( (error) => {
         console.log('an error occured ' + error);
     })

     return  outPut

        }
      
 }
 getCountyStats()



    },

    fetchKwale(){
      const sendKwaleRequest = async () => {
        try {
          const response = await axios.get('http://localhost:8005/geoserver/rasters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rasters%3Akwale&maxFeatures=50&outputFormat=application%2Fjson')
          this.kwale_geojson = response.data
          console.log(response.data, 'kwale response')
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      sendKwaleRequest();
    },
    fetchKwaleRaster() {
      const sendRasterRequest = async () => {
        try {
          const response = await axios.get('http://localhost:8005/geoserver/rasters/wms')
          this.kwale_raster = response.data
          console.log(response.data, 'kwale raster')
        } catch (error) {
          console.log(error)
        }

      }
      sendRasterRequest();
    },

    //geoserver raster layers
    fetchRegionsList() {
      this.layers = ['kiambu_clip1', 'machakos1', 'Meru', 'Embu', 'Nyeri']

    },

    //fetch geoserver geojsons

    fetchGeoserverList() {
      this.geoserver_regions = ['kiambu', 'machakos', 'Meru', 'Embu', 'Nyeri']

    },

    showSelectedLayer($event){
      var selected_layer = $event.target.value
      console.log(selected_layer, 'selected geoserver layer')
      // this.countries =  selected_country
      this.selected_layer =  selected_layer
      // console.log(this.selected_layer , 'changed geoserver layer')
      // return selected_country
      var data = this.selected_layer
      // console.log(data, 'data')

      const fetchKwaleRequest = async () => {
        try {
          this.loading = true
          const response = await axios.get('http://localhost:8005/geoserver/rasters/wms?')
          this.selected_raster= response.data
          console.log(response.data, 'kwale raster')
          this.loading = false;
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      fetchKwaleRequest();  

    },
    showSelectedGeoserverLayer($event){
      var selected_layer = $event.target.value
      console.log(selected_layer, 'selected region name')
      // this.countries =  selected_country
      this.selected_geoserver_region =  selected_layer
      // console.log(this.selected_layer , 'changed geoserver layer')
      // return selected_country
      var data =  this.selected_geoserver_region
      console.log(data, 'data name')

      const fetchKwaleRequest = async () => {
        try {
          this.loading = true;
          const response = await axios.get('http://localhost:8005/geoserver/rasters/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rasters%3A'+data+'&maxFeatures=50&outputFormat=application%2Fjson')
          this.current_geoserver_geojson= response.data
           this.loading = false;
          console.log(response.data, 'geoserver geojson')
          // return response.data


          //fetch raster
        

        } catch (error) {
          console.log('could not fetch data'+error)
          
        }
      }
      fetchKwaleRequest();  

    },


    //trial fetchData
    fetchData(){
      if(this.selected_basin === 'Kiambu' && this.selected_indicator === 'Exposure' && this.selected_sub_indicator === 'Land Cover' && this.selected_year === '2020'){
        console.log('kiambu data  fetched')
      }else{
        console.log('no data')
      }
    },


    async findData() {
      try {
        // this.loading = true
        const response = await axios.post(
          "https://wemast.geoimagesolutions.com/wemast-api-back-end-0.1/api/dataserver/finddata",
          {
            basin: this.selected_basin,
            indicator: this.selected_indicator,
            year: this.selected_year,
            geometry:  this.current_geojson
          },

          {
            // headers: {
            //   sdf09rt2s: "locateit",
            // },
          }
        );
      //   if (process.env.DEV) console.log("find data response ", response.data);
      //   await this.getWMS_Layer({
      //     layers: response.data.layername,
      //   });
      //  await  this.getLegend({
      //     base_url: response.data.geoserver,
      //     legend_url: response.data.legendurl,
      //   });
      //   await this.getStatistics();
        //  this.loading = false
      } catch (error) {
        // if (process.env.DEV) console.log("find data error ", error);
        //  this.$q.loading.hide()
      }
    }
  },

  getters: {
    getSelectedRegion:(state) => state.current_geojson, 
    getSelectedPoints:(state) => state.current_point_geojson,
    getSelectedCountyName:(state) => state.selected_region, 
    getSelectedCause:(state) => state.selected_cause, 
    getChartData:(state)=>state.testData.chatData_restructure,
    getChartOptions:(state)=>state.testData.options,
    getBarChartOptions:(state)=>state.barchart_options,
    getLoadingState:(state)=> state.loading,
    getKwale:(state)=>state.kwale_geojson,
    getSelectedLayerName:(state)=>state.selected_layer,
    getKwaleRaster:(state)=>state.kwale_raster,
    getSelectRaster:(state)=>state.selected_raster,
    //geoserver geojsons
    getSelectedGeoserverRegionName:(state)=>state.selected_geoserver_region,
    getSelectedGeoserverRegion:(state)=>state.current_geoserver_geojson,
    //wemast_v2 lists

    getRegionList:(state)=>state.countries,
   
    getIndicatorList:(state)=>state.indicator_list
  
    
  },
})
