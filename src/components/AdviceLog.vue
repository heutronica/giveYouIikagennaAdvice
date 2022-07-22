<template>
<ul>
    <li v-for="list in lists">
    <div class="wrap">
        <span class="question">{{list.question}}</span>
        <span class="advice">{{list.advice}}</span>
    </div>
        <button @click="deleteQA(list.id.valueOf())">👎</button>
    </li>
</ul>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { adviceStore }from '../stores/adviceStore'

export default defineComponent({
    setup() {
        const lists = adviceStore.state.qaList

        const deleteQA = (id: number) => {
            adviceStore.deleteAdvice(id)
        }

        return {
            lists,
            deleteQA
        }
    }
    
})
</script>


<style scoped>
ul {
    list-style: none;
    padding-left: 0;
}
li {
     display: flex;
    padding: 2rem 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px rgb(190, 202, 180);
}

span {
    display: block;
}
.question {
margin-bottom: 0.6rem;
}
.advice {
    font-size: 1.3rem;
    font-weight: 600;
}

button {
    cursor:pointer;
    background-color:white;
    border: 1px solid;
    border-radius: 999px;
    color: rgb(190, 202, 180);
    padding:  1rem;
    text-decoration: none;

    text-align: center;
}
</style>
