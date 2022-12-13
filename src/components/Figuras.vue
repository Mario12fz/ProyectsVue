<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="../assets/Triangulo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Triangulo</h5>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                               Base: <input v-model.number="baseT" type="number" class="w-55 form-control" step="1" />
                            </div>
                            <div class="col">
                               Altura: <input  v-model.number="alturaT" type="number" class="w-55 form-control" step="1" />
                            </div>
                        </div>
                        <br>
                        <div class="card text-center">
                            <button class="btn btn-success" v-on:click="calcularAreaTriangulo"><strong>Calcular</strong></button>
                        </div>
                    </div>
                    <p class="card-text"><small class="text-dark"><strong>Area del triangulo = </strong>{{Area}}</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>

            <div class="col">
                <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="../assets/cilindro.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Cilindro</h5>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                               Radio: <input v-model.number="radioCi" type="number" class="w-55 form-control" step="1" />
                            </div>
                            <div class="col">
                               Altura: <input  v-model.number="alturaCi" type="number" class="w-55 form-control" step="1" />
                            </div>
                        </div>
                        <br>
                        <div class="card text-center">
                            <button class="btn btn-success" v-on:click="calcularAreaCilindro"><strong>Calcular</strong></button>
                        </div>
                    </div>
                    <p class="card-text"><small class="text-dark"><strong>Area del cilindro = </strong>{{AreaCilindro}}</small></p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="../assets/Circulo.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Circulo</h5>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                               Radio: <input v-model.number="radioCirculo" type="number" class="w-50 form-control" step="1" />
                            </div>
                        </div>
                    </div>
                    <br>
                        <div class="card text-center">
                            <button class="btn btn-success" v-on:click="calcularAreaCirculo"><strong>Calcular</strong></button>
                        </div>
                        <p class="card-text"><small class="text-dark"><strong>Area del circulo = </strong>{{AreaCirculo}}</small></p>
                </div>
                </div>
            </div>
            </div>
        </div>

            <div class="col">
                <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="../assets/Trapecio.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Trapecio</h5>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                               Base Menor: <input v-model.number="baseMenor" type="number" class="w-50" step="1" />
                            </div>
                            <div class="col">
                               Base Mayor: <input  v-model.number="baseMayor" type="number" class="w-50" step="1" />
                            </div>
                            <div class="col">
                                Altura: <input v-model.number="alturaTrap" type="number" class="w-50" step="1" />
                            </div>
                        </div>
                        <br>
                        <div class="card text-center">
                            <button class="btn btn-success" v-on:click="calcularAreaTrapecio"><strong>Calcular</strong></button>
                        </div>
                    </div>
                    <p class="card-text"><small class="text-dark"><strong>Area del Trapecio = </strong>{{AreaTrapecio}}</small></p>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        data() {
            return {
                baseT:0,
                alturaT:0,
                radioCi:0,
                alturaCi:0,
                radioCirculo:0,
                baseMenor:0,
                baseMayor:0,
                alturaTrap:0,
                Area:0.0,
                AreaCilindro:0.0,
                AreaCirculo: 0.0,
                AreaTrapecio:0.0
            }
        },

        methods:{

            calcularAreaTriangulo(){
                let area = this.baseT * this.alturaT / 2;
                this.Area = area;
            },

            calcularAreaCilindro(){
                const PI = 3.1416;

                let area = 2 * PI * (this.radioCi + this.alturaCi);
                this.AreaCilindro = area;

            },

            calcularAreaCirculo(){
                const PI = 3.1416;
                let area = PI * Math.pow(this.radioCirculo, 2);
                this.AreaCirculo = area;
            },

            calcularAreaTrapecio(){
                let area = (this.baseMayor + this.baseMenor) / 2 * this.alturaTrap;
                this.AreaTrapecio = area;
                console.log(area);
            }

         

        },
    }

</script>