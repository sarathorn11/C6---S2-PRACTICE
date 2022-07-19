<template>
<div id="app">
  
    <NavbarVue></NavbarVue>
    <FormContenerVue></FormContenerVue>
    <CardItemVue></CardItemVue>
    <CardItemVue></CardItemVue>
</div>

</template>
<script>

import NavbarVue from './components/NavbarVue.vue';
import FormContenerVue from './components/FormContenerVue.vue';
import CardItemVue from './components/CardItemVue.vue';
export default {
    name:'App',
    components:{
        NavbarVue,
        FormContenerVue,
        CardItemVue
    }
  

};
</script>

<style>
    *{
    margin: 0;
    font-family: sans-serif;
    
}

</style>
