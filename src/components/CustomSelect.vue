<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch, toRef, onMounted } from 'vue';
export default defineComponent( {
  props: {
    options: {
      type: Array,
      required: false,
    },
    // name_county: {
    //   type: String,
    //   default:'county'
      
    // },
    default: {
      type: String,
      // required: false,
      // default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },

//   computed: {
//     check_data (){
    
//        return{
        
//           name_county: this.name_county,
          
            
//        }
       
//     }

//   },

//    watch:{
//    check_data(){
// this.displayToKey();


//    },
//    deep: true

//   },
setup(props) {
    return {
      selected: props.default
        ? props.default
        : props.options.length > 0
        ? props.options[0]
        : null,
      open: false,
    };

},
 
  
  onMounted() {
    this.$emit("input", this.selected);
  },
});
</script>

<style scoped>
.custom-select {
  position: absolute;
  width: 90%;
  text-align: left;
  outline: none;
  height: 35px;
  line-height: 34px;
}

.custom-select .selected {
  background-color: #9b9797;
   border-radius: 30px;
  border: 1px solid #666666;
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #706e6e;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #706e6e;
  border-left: 1px solid #706e6e;
  border-bottom: 1px solid #706e6e;
  position: absolute;
  background-color: #212222;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #fff;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
   border-bottom: 1px solid #ffffff;
}

.custom-select .items div:hover {
  background-color: #099f46;
}

.selectHide {
  display: none;
}
</style>
