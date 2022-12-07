<template>
  <nav class="navbar navbar-expand navbar-light bg-dark">
      <div class="nav navbar-nav">
        <router-link to="/ejercicio" class="nav-link text-white">Calculadora</router-link> 
        <router-link to="/juego" class="nav-link text-white"> Juego </router-link>
        <router-link to="/figuras" class="nav-link text-white"> Calcular Figuras </router-link>  
        <router-link to="/promedio" class="nav-link text-white"> Promedios </router-link>          
      </div>
      
  </nav>

  
  <router-view/>
  
</template>

