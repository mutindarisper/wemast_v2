<template>
    <div class="nav">
        
            <img class="sasscal" src="../assets/logos/SASSCAL.png" alt="">
      
        <div class="project_title">

           <span class="project_title1">WETLAND MONITORING AND ASSESSMENT FOR TRANSBOUNDARY BASINS IN SOUTHERN
          AFRICA</span> 
          <br>
          <span class="wemast_span" style="color:steelblue;font-weight:bold">(WeMAST 2.0)</span>
        </div>
        <div class="partners_logos">
            <img class="gmes" src="../assets/logos/Gmes.png" alt="">
            <img class="au" src="../assets/logos/AU.png" alt="">
            <img class="eu" src="../assets/logos/EU.png" alt="">
        </div>
        <div class="wemast_logo">
            <img class="wemast_logo" src="../assets/logos/WeMAST.png" alt="">
        </div>
        <div class="nav_icons">
            <img class="home" src=" /uiIcons/home-landing.svg" alt="">
            
            <img class="dashboard" src=" /uiIcons/dashboard-24px.svg" alt="">
           
            <img class="person" src=" /uiIcons/person.svg" alt="">
            
            <img class="search" src=" /uiIcons/search.svg" alt="">
           

        </div>
        <div class="icon_titles">
            <span id="home">Home</span>
            <span id="dashboard">Dashboard</span>
            <span id="admin">Admin</span>
            <span id="search">Search</span>
        </div>

    </div>
  
</template>

<script setup>

</script>

<style scoped>
    .nav{
        width: 100vw;
        height: 10vh;
    }
    .sasscal {
  width:100px;
  height: 55px;
    /* margin-left: 8px;
    margin-right: 35px; */
    /* margin-top: 20px; */

  
}
.project_title {
    position: absolute;
    top:-1.5vh;
    left:8vw ;
  margin-top: 25px;
 
  
}
.project_title1{
  font-size: 13px;
  font-weight: bolder;
  /* font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
}
.partners_logos{
    position: absolute;
    top:1.5vh;
    left:41vw ;
  
}
.gmes{
    width:120px;
  height: 45px;
  margin: 1px;
}
.au{
    width:85px;
  height: 45px;
}
.eu{
    width:69px;
  height: 45px;
}
.wemast_logo{
    position: absolute;
    top:.8vh;
    left:32vw ;
    width:80px;
  height: 45px;
  
}

.nav_icons{
    position: absolute;
    top:2vh;
    left:85vw; 
    display: flex;
    gap: 2em;
    /* margin: 20px; */
}
.icon_titles{
    position: absolute;
    top: 4vh;
    left:82vw; 
    display: flex;
    gap: 2em;
    margin: 20px;
    width: 36px;
}



</style>