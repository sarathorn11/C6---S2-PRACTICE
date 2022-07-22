<template>

    <div class="all_card">
        <div class="card">
            <div class="titleSkills">Personal Details</div>
            <div class="name">
                {{friend.FirstName}} {{friend.Lastname}}
            </div>
            <div class="comment">
                {{friend.comment}}
            </div>
            <hr>
            <div class="titleSkills">Skills</div>
            <div class="listOfSkills">
                <skill-item v-for="skill in friend.skills" :key="skill" :listOfSkills="skill" />
            </div>
        </div>

    </div>

</template>

<script>

import SkillsVue from "./SkillView.vue"
export default {
    components:{
        'skill-item': SkillsVue,
    },
    name: 'CardItemVue',
    props:{
        friend: Object,
        listOfSkills:[]
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
.titleSkills{
    background: rgb(77, 197, 206);
    font-weight: bold;
    margin-bottom: 0.7rem;
}
.listOfSkills{
    display: flex;
}
</style>
