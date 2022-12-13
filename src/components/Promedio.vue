<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="card text-center">
        <div class="card-header header text-white">
            <strong>Promedio de notas</strong>
        </div>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col">
                       <strong>Nota 1:</strong> <input v-model.number="nota1" class="w-50 input" type="number" step="1" max="10" min="0"  required />
                    </div>
                    <div class="col">
                        <strong>Nota 2:</strong> <input v-model.number="nota2" class="w-50 input" type="number" step="1" max="10" min="0" required />
                    </div>
                    <div class="col">
                        <strong>Nota 3:</strong> <input v-model.number="nota3" class="w-50 input" type="number" step="1" max="10" min="0" required />
                    </div>
                </div>
            </div>
            <br> 
             <a href="#" class="btn btn-primary" v-on:click="calcPromedio">Calcular</a>
        </div>
        <div class="card-footer text-muted">
            <h6>Promedio: {{promedio}} </h6>
        </div>
        </div>
    </div>
</template>
<script>

    export default{
        data() {
            return {
                nota1: 0.0,
                nota2: 0.0,
                nota3: 0.0,
                promedio: 0
                
            }
        },

        methods:{

            calcPromedio(){

                let total = this.nota1 + this.nota2 + this.nota3
                let promediot = total / 3
                this.promedio = promediot

                if(this.promedio >= 7){
                    alert('Felicidades aprobaste!!');
                }else{
                    alert('Reprobaste :(, suerte el año que viene!! ')
                }

            }
            

        }
    }

</script>
<style>

.input{
    color: white;
    background: black;
    border-radius: 10%;
    margin: auto;
    overflow: hidden;
    
}

.header{
    background: linear-gradient(#020024, #6f238a, #00d4ff  ) ;
    font-family: Georgia, 'Times New Roman', Times, serif;
}



</style>