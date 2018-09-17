<template>
    <div>
        <div class="form-group">
            <label for="">Company</label>
            <input type="text" class="form-control" v-model="contractor.company">
            <label for="">Name</label>
            <input type="text" class="form-control" v-model="contractor.name">
            <label for="">Surname</label>
            <input type="text" class="form-control" v-model="contractor.surname">
            <label for="">Number</label>
            <input type="text" class="form-control" v-model="contractor.number">
            <label for="">Email</label>
            <input type="text" class="form-control" v-model="contractor.email">
            <hr>
            <button class="btn btn-primary" @click="submit">Add contractor</button>
            <hr>
            <button class="btn btn-primary" @click="fetchData">Get the list of contractors</button>
            <label for="">Below</label>
            <input type="text" v-model='newValue'>
            <ul class="list-group"> 
                <li class="data list-group-item" >Comapny</li>
                <li class="data list-group-item">Name</li>
                <li class="data list-group-item" >Surname</li>
                <li class="data list-group-item" >Number</li>
                <li class="data list-group-item">Email</li>
            </ul>
            <ul class="list-group" v-for="c in contractors">
                <li class="data list-group-item" @dblclick="changeData">{{c.company}}</li>
                <li class="data list-group-item" @dblclick="changeData">{{c.name}}</li>
                <li class="data list-group-item" @dblclick="changeData">{{c.surname}}</li>
                <li class="data list-group-item" @dblclick="changeData">{{c.number}}</li>
                <li class="data list-group-item" @dblclick="changeData">{{c.email}}</li>
            </ul>
            <hr>
            <button class="btn btn-primary" @click="saveChange">Save changes</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contractor: {
                    company: '',
                    name: '',
                    surname: '',
                    number: '',
                    email: ''
                },
                contractors: [],
                newValue: ''
            };
        },
        methods: {
            submit() {
                this.$http.post('', this.contractor)
                    .then(response => {
                        console.log(response)
                    }, error => {
                        console.log(error)
                    })
            },
            fetchData() {
                this.$http.get('')
                    .then(response => {
                        return response.json()
                    }).then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key])
                        }
                        this.contractors = resultArray
                    })
            },
            changeData(e) {
//                console.log(this.contractors)
//                console.log(this.newValue)
                
/*                for(let con in this.contractors){
                    console.log(this.contractors)
                    

                }*/
                
                
                
                
                
                
                
                
                
                
//                console.log(e)
//                if(e.target.innerHTML === this.contractors)
                
/*                this.contractors.forEach(con => {
                    console.log(con)
                })*/ 
//                console.log()
/*                for(let el in this.contractors){
                    console.dir(this.contractors)
                }*/
//                if(e.target){
//                    console.log(this.contractors)
//                }
                
//                console.dir(this.contractors)
//                if(e.target.th)
//                console.log(Object.values(this.contractors))
                if (confirm('Are you sure you want to change ' + e.target.innerHTML + ' on ' + this.newValue + ' ?')) {
                    e.target.innerHTML = this.newValue
//                    this.constructer                    
                }                 
            },
            saveChange(e){
//                console.log(this.contractors.e.target)
                console.log(this.e)
               this.submit()
            }
        }
    }

</script>

<style>
    .form-group {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;

    }

    .list-group {
        flex-direction: row;
        margin-top: 2px;
    }

    .list-group:first-of-type {
        flex-direction: row;
        margin-top: 20px;
    }

    .data {
        flex: 1;
    }

</style>
