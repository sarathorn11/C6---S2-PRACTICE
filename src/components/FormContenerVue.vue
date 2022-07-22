<template>

    <form @submit.prevent="addName" class="form_contener">
        <input class='input'  type="text"  name="fname" placeholder="Fist Name" v-model="firstName"><br>
        <input class='input'  type="text"  name="lname" placeholder="Last Name" v-model="lastName"><br><br>
        <input class='input'  type="text"  name="comment" placeholder="Comment" v-model="comment"><br><br>
        <div class="skills">
            <input class='checkbox' type="checkbox" id="Web-Developer" value="Developer" v-model="skills">
            <label  for="Web-Developer">Developer</label>
            <input class='checkbox' type="checkbox" id="Web-Designer" value="Designer" v-model="skills">
            <label  for="Web-Designer">Designer</label>
            <input class='checkbox' type="checkbox" id="Web-Programmer" value="Programmer" v-model="skills">
            <label for="Web-Programmer">Programmer</label>
        </div>
        <input type="submit" value="ADD" class="btn input">
    </form>
</template>

<script>
export default {

    name: "fried-card",
    emit:"add-data",


    data(){
      return {
        firstName: "",
        lastName: "",
        comment: "",
        skills: [],
      }
    },
    methods: {
      addName(){
                this.$emit("add-data",this.firstName,this.lastName,this.comment,this.skills)
          }
  
    }

  }


</script>

<style>


.form_contener{
    margin: 3rem auto;
    width: 30%;
    box-shadow: 0 0.5rem 1rem black;
    background: rgb(230, 228, 228);
    padding: 3rem 1rem;
    border-radius: 7px;
}
.form_contener .input{
    width: 100%;
    box-sizing: border-box;
    margin: 0.5rem 0;
    padding: 0.8rem;
    
}
.btn{
    background: rgb(223, 155, 19);
    border: none;
    text-align: center;
    cursor: pointer;
}
.skills{
  display: flex;
  
}
.checkbox{
  margin: 0 1rem;
}


</style>
