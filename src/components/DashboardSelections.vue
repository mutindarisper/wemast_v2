<template>
    <div class="selections">
        <p class="select_country">Select Region</p>
        <select name="" id="region_selection">
            <option value=""></option>
        </select>

        <p class="select_cause">Select Indicator</p>
        <select name="" id="cause_selection">
            <option value=""></option>
        </select>

        <p class="select_sub-indicator">Select Sub-Indicator</p>
        <select name="" id="sub_indicator_selection">
            <option value=""></option>
        </select>

        <p class="select_year">Select Year</p>
        <select name="" id="year_selection">
            <option value=""></option>
        </select>

        <button class="request" type="button">REQUEST</button>
        

    </div>
  
</template>

<script setup>

</script>

<style scoped>
    .selections{
        background-color: #ccc;
        width: 100vw;
        height: 10vh;
    }
    .select_country{ 
  position: absolute;
  top: 1vh;
  left: 0.8vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  top: 1vh;
  left: 10vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  top: 1vh;
  left: 20vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  top: 1vh;
  left: 30vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}

#year_selection{
  position: absolute;
  top: 4vh;
  left: 30vw;
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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  color: #fff;
  background-color: steelblue;
  cursor: pointer;
}



</style>