<template>

    <form class="form_contener">
        <input type="text"  name="fname" placeholder="Fist Name"><br>
        <input type="text"  name="lname" placeholder="Last Name" ><br><br>
        <input type="text"  name="comment" placeholder="Comment"><br><br>
        <input   value="ADD" class="btn">
    </form>
  
</template>

<script>
export default {

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
.form_contener input{
    width: 100%;
    box-sizing: border-box;
    margin: 0.5rem 0;
    padding: 0.8rem;
    
}
.btn{
    background: rgb(223, 155, 19);
    border: none;
    text-align: center;
}

</style>
