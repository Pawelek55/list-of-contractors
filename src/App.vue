<template>
  <div id="app">
    <h1>Contractors 1.0</h1>
        <app-new-contractor></app-new-contractor>
 
  </div>
</template>

<script>
import NewContractor from './components/NewContractor.vue' 
export default {
  data () {
    return {
        
    }
  },
    components: {
        'app-new-contractor': NewContractor,
    }
}
</script>

<style>
    h1{
        text-align: center;
    }
    ul{
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    }
    
    li{
        list-style: none;
    }
    
    li:hover{
        cursor: pointer;
    }
</style>
