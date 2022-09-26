<template>
  <div class="compare_layers">
    <div class="compare_selections">
        <p class="select_indicator">Select Indicator</p>
        <div class="indicator_selection">
                <CustomSelectIndicatorCompare />
        </div>

        <p class="select_sub_indicator">Select Sub-Indicator</p>
        <div class="sub_indicator_selection">
                <CustomSelectIndicatorCompare />
        </div>
    </div>
  </div>
</template>

<script setup>
    import CustomSelectIndicatorCompare from '../components/CustomSelectIndicatorCompare.vue'

</script>

<style scoped>
    .compare_layers{
        height: 250px;
        width: 300px;
        background-color: #fff;
    }
    .compare_selections{
        position: absolute;
        left:2vw;
        height: 180px;
        width: 280px;
    }
    .select_indicator{
        position: absolute;
        top: 4vh;
        left: 1vw;
        font-weight: 700;
    }
    .indicator_selection{
        position: absolute;
        top: 8vh; 
        left: 1vw;
    }

    .select_sub_indicator{
        position: absolute;
        top: 12vh;
        left: 1vw;
        font-weight: 700;
    }
    .sub_indicator_selection{
        position: absolute;
        top: 17vh; 
        left: 1vw;
    }


</style>