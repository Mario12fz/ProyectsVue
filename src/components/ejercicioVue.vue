
<template>
    <div class="container">
        <br>
        <br>
        <card class="card w-50">
          <div class="bg-success text-white text-center card-header">
            <strong>Calculadora</strong>
          </div>
          <card-body class="container">
            <div class="container">
              <div class="row">
                <div class="col">
                <strong>Número 1:</strong><input v-model.number="num1" type="number" class="form-control w-75 bg-dark text-white" step="1" min="1" max="100" />
              </div>
              <div class="col">
                <strong>Número 2:</strong><input v-model.number="num2" type="number"  class="form-control w-75 bg-dark text-white" step="1" min="1" max="100" />
              </div>
              </div>
            </div>
            <br>
            <div class="container">
              <div class="row">
                <div class="col">
                  <input type="button" value="+" class="btn btn-primary text-white" v-on:click="suma">
                </div>
                <div class="col">
                  <input type="button" value="x" class="btn btn-warning text-white" v-on:click="multiplicar">
                </div>
                <div class="col">
                  <input type="button" value="/" class="btn btn-dark text-white" v-on:click="dividir">
                </div>
              </div>
            </div>
            <br>
            <br>
            <div class="container bg-dark text-warning">
              <h1 class="text-center"><strong>{{resultado}}</strong></h1>
            </div>
            <div class="alert alert-success" role="alert">
               {{mensaje}}
            </div>
          </card-body>

        </card>
   </div>
   <br>
   <br>
   <div class="container">
    <div class="container">
      <div class="row">
        <div class="col">
          <input type="button" value="Generar Fecha" class="btn btn-secondary" v-on:click="generarFecha">
        </div>
      </div>
    </div>
    <div class="card-header w-50">
      <h6>{{fecha}}</h6>
      <br>
      <h4 class="text-purple"> {{sorpresa}}</h4>
   </div>
   </div>
</template>

<script>

export default {
    data(){
       return{
         contador: 0,
         num1:0,
         num2:0,
         resultado: "0.0",
         mensaje:"--",
         fecha:"",
         sorpresa: 0
       }
   },
   methods:{

    suma:function(){
      let resultado = this.num1 + this.num2;
      if(((this.num1 > this.num2))){
        var info = "Numero 1 es mayor a numero 2";
      }else if(this.num1 == this.num2){
        info = "Numero 1 y Numero 2 son Iguales";
      }else{
         info =  "Numero 2 es mayor a numero 1";
      }
      this.resultado = resultado;
      this.mensaje = info;
    },

    multiplicar:function(){
      let resultado = this.num1 * this.num2;
      this.resultado = resultado;     
    },

    dividir:function(){
      let resultado = this.num1 / this.num2;
      this.resultado = resultado;
    },

    generarFecha:function(){
      let date = new Date().toLocaleDateString();
      this.fecha = date;
      console.log(date)
    },

    numeroAleatorio:function(){
      let resultado = Math.floor(Math.random()*10)
      this.sorpresa = resultado;

      if(this.sorpresa == 5){
        alert(" PERDISTE ")
      }

    }
    
   }
}
</script>