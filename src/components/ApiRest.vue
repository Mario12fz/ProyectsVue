<template>
    <div class="container">
        <div class="card-header text-center bg-secondary text-white"><h5><strong>Datos-API</strong></h5></div>
        <br>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody  class="table"   v-for="apis in api" 
            :key="apis.id">
            <tr>
            <th scope="row">{{apis.id}}</th>
            <td>{{apis.title}}</td>
            <td>
                <span class="material-symbols-outlined bg-dark text-white rounded-circle">border_color</span> |
                <span class="material-symbols-outlined bg-danger text-white rounded-circle">delete</span>
            </td>
                
            </tr>
        </tbody>
        </table>
        
    </div>
</template>
<script>

    export default{
        data() {
            return {
                api: []
            }
        },

        mounted(){
            
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((datos) => (this.api = datos))
           
        }
    }
    



</script>
