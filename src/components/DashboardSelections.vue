<template>
    <div class="selections">
        <p class="select_country">Select Region</p>
        <!-- <select name="" id="region_selection">
            <option value=""></option>
        </select> -->
        <div id="region_selection">
          <CustomSelect2
       
        
       />
        </div>

        <!-- <select name="" id="country_selection" @click="storeUserSelections.fetchCountriesList"
     @input="storeUserSelections.showSelectedCountry"
      placeholder="Select Region"
     >

     <option>{{ storeUserSelections.placeholder}}</option>
  
     <option v-for="country in storeUserSelections.countries" :key="country">{{ country}}</option>
   </select>
        -->

        <p class="select_cause">Select Indicator</p>
        <div id="cause_selection">
          <CustomSelectIndicator />
        </div>

        <p class="select_sub-indicator">Select Sub-Indicator</p>
        <div id="sub_indicator_selection">
            <CustomSelectSubIndicator />
        </div>

        <p class="select_year">Select Year</p>
        <div id="year_selection">
            <CustomSelectYear />
        </div>

        <button class="request" type="button">REQUEST</button>
        

    </div>
  
</template>

<script setup>
  import { ref } from 'vue';
import CustomSelect from './CustomSelect.vue';
import {useCounterStore } from '../stores/counter';
import CustomSelect2 from './CustomSelect2.vue';
import CustomSelectIndicator from './CustomSelectIndicator.vue';
import CustomSelectSubIndicator from './CustomSelectSubIndicator.vue'
import CustomSelectYear from './CustomSelectYear.vue'

// let counties = ref(['Limpopo', 'Cuvelai', 'Okavango', 'Zambezi'])

const storeUserSelections = useCounterStore()

</script>

<style scoped>
    .selections{
        background-color: #ddd;
        width: 99.3vw;
        height: 10vh;
        z-index: 2000;
    }
    .select_country{ 
  position: absolute;
  top: 0.3vh;
  left: 0.8vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}
#region_selection{ 
  position: absolute;
  top: 4vh;
  left: 0.8vw;
  height: 35px;
  width: 120px;
  border-radius: 30px;
  cursor: pointer;
}

.select_cause{ 
  position: absolute;
  top: 0.3vh;
  left: 10vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}

#cause_selection{ 
  position: absolute;
  top: 4vh;
  left: 10vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
}

.select_sub-indicator{ 
  position: absolute;
  top: 0.3vh;
  left: 20vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}

#sub_indicator_selection{
  position: absolute;
  top: 4vh;
  left: 20vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
}


.select_year{ 
  position: absolute;
  top: 0.3vh;
  left: 32vw;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
}

#year_selection{
  position: absolute;
  top: 4vh;
  left: 32vw;
  height: 35px;
  width: 140px;
  border-radius: 30px;
  cursor: pointer;
}
.request{
    position: absolute;
  top: 4vh;
  left: 40vw;
  width: 140px;
  height: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: steelblue;
  cursor: pointer;
}



</style>