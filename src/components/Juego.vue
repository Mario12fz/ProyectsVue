<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container w-50">
        <div class="card text-center">
        <div class="card-header bg-dark text-white">
            Juego 
        </div>
        <div class="card-body">
            <h5 class="card-title">Jugador 1 : {{ jugador1 }}</h5>
            <h5 class="card-title">Jugador 2 : {{ jugador2 }}</h5>

            <button class="btn btn-success" v-on:click="jugar"><strong>Jugar</strong></button>
        </div>
        <div class="card-footer text-muted">
            <strong>{{ganador}}</strong>
        </div>
        </div>
            
    </div>
</template>
<script>

    export default{
        data() {
            return {
                jugador1:0,
                jugador2:0,
                ganador:"--"
            }
        },

        methods:{

            jugar:function(){
                this.jugador1 = Math.round(Math.random()*10);
                this.jugador2 = Math.round(Math.random()*10);

                var mensaje = "!!Hay un empate";

                if(((this.jugador1 > this.jugador2 ))){
                    mensaje = "!!Gana jugador 1";

                }else if(this.jugador1 != this.jugador2){
                    mensaje= "!!Gana jugador 2";
                }
                this.ganador = mensaje;

            }
        }
    }

</script>