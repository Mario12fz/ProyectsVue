<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <br>
        cateto A: <input v-model.number="catetoA" type="number" class="form-control w-25" step="1" />
        <br>
        <br>
        cateto B: <input v-model.number="catetoB" type="number" class="form-control w-25" step="1" />
        <br><br>
        <button type="submit" class="btn btn-dark boton" v-on:click="calcHipotenusa" >Calcular</button>
        <br>
        Hipotenusa = <h6>{{hipotenusa}}</h6>
        <br><br>
        <hr class="hr">
        <div class="card-header"><h5>Invetir Texto</h5></div>
        <br>
        <div class="container">
            <div class="row">
                <div class="col">
                     Escribe: <input v-model="mensaje" type="text" />
                </div>
                <div class="col">
                    Normal: <h6>{{mensaje}}</h6>
                </div>
                <div class="col">
                    Invertido: <h6>{{invertir}}</h6>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <div class="card-header"><h5>Parte Entera</h5></div>
        <br>
        <div class="card container">
          <div class="row">
                <div class="col">
                    <strong>Ingrese un número:</strong> <input v-model.number="numero" type="number" step="1" class="w-25 form-control" max="50" min="0" /> 
                </div>
                <div class="col">
                    decimal: <h6>{{numero}}</h6>
                </div>
                <div class="col">
                    Parte entera: <h6 class="text-success"><strong>{{showDecimal}}</strong></h6>
                </div>
          </div>

        </div>
        <br>
        <br>
    </div>
    
</template>
<script>
    export default{
        data() {
            return {
                catetoA: 0,
                catetoB: 0,
                hipotenusa: 0,
                mensaje: "...",
                numero: 0
            }
        },

        computed:{

            invertir(){
                return this.mensaje.split("").reverse().join("");
            },

            showDecimal(){
                return Math.trunc(this.numero);
            }


        },

        methods:{

            calcHipotenusa(){
                
                let resultado = Math.pow(this.catetoA, 2) + Math.pow(this.catetoB, 2);
                let hipotenusa = Math.sqrt(resultado)
                this.hipotenusa = hipotenusa
            }
            
        }
    }


</script>
<style>

    .hr{
       background: blue;
       
    }

    .boton{
        border-color: #3498db;
        color:  #fff;
        box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
         -webkit-transition: all 150ms ease-in-out;
        transition: all 150ms ease-in-out;
    }
    
    .boton:hover{
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    }



</style>