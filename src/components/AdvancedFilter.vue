<template>
  <div class="filter">
    
    <div class="filter_selections">
        <p class="select_country">Select Country</p>
    <div class="country_selection">
        <CustomSelectCountry />
    </div>
    <p class="select_wetland">Select Wetland</p>
    <div class="wetland_selection">
        <CustomSelectCountry />
    </div>
    <p class="select_platform">Select Platform</p>
    <div class="platform_selection">
        <CustomSelectCountry />
    </div>

    <button type="button" class="submit">SUBMIT</button>
    </div>
   
    
    

  </div>
</template>

<script setup>

import CustomSelectCountry from './CustomSelectCountry.vue';
    

</script>

<style scoped>
    .filter{
        height: 450px;
        width: 300px;
        background-color: #fff;
        
    }
    .filter_selections{
        position: absolute;
        left: 1vw;
        top: 4vh;
        height: 400px;
        width: 250px;


    }
    .select_country{
        position: absolute;
        top: 1vh;
        left: 1vw;
        font-weight: 700;
    }
    .country_selection{
        position: absolute;
        top: 6vh;
        left: 1vw;

    }

    .select_wetland{
        position: absolute;
        top: 10vh;
        left: 1vw;
        font-weight: 700;
    }
    .wetland_selection{
        position: absolute;
        top: 14vh;
        left: 1vw;

    }
    .select_platform{
        position: absolute;
        top: 19vh;
        left: 1vw;
        font-weight: 700;
    }
    .platform_selection{
        position: absolute;
        top: 23vh;
        left: 1vw;

    }
    .submit{
        position: absolute;
        top: 32vh;
        left: 1vw;
        height: 35px;
        width: 200px;
        border-radius: 50px;
        background-color: steelblue;
        color: #fff;
        font-weight: 700;
        border: none;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        cursor: pointer;
    }

   


</style>