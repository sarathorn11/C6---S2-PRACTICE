<template>
<div id="app">
  
    <NavbarVue></NavbarVue>
    <FormContenerVue @add-data="addFriend"></FormContenerVue>
    <CardItemVue v-for="list in lists" :key="list" :friend="list"/>
    
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
        CardItemVue,

    },
      data(){
      return {
        lists: [
            {FirstName:'Sarath', LastName:'Orn',comment:"I am a student in PNC",skills:[]},
                  ],
      }
    },
    methods: {
     
      addFriend(fname,lname,comment,skill){
            this.lists.push({FirstName:fname,Lastname:lname,comment:comment,skills:skill})
        },
      

    }

  

};
</script>

<style>
    *{
    margin: 0;
    font-family: sans-serif;
    
}
</style>
