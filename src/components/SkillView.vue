<template>
                 <div class="skill">
                    {{listOfSkills}}

                </div>

</template>

<script>


export default {
    props:{
        listOfSkills: String
    }
    

}
</script>

<style>

.all_card{
    margin-top: 2rem;
}
.card{
    margin: 3rem auto;
    width: 30%;
    box-shadow: 0 0.5rem 1rem black;
    background: rgb(230, 228, 228);
    padding: 1.2rem 1rem;
    border-radius: 7px;
}
.name{
    font-weight: bold;
    margin-bottom: 7px;
}
.skill{
    background: rgb(214, 191, 15);
    padding: 3px 1rem;
    border-radius: 7px;
    margin: 3px;
}
</style>
