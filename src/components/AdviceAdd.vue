<template>
    <h2>Tell me your problems.</h2>
    <div class="form-wrap">
        <div class="input-wrap">
            <input type="text" v-model="newQuestion" v-bind:class="[{input_error: isError}, 'input']">
            <p v-if="isError" class="input_errorText">Please enter at least one letter.</p>
        </div>
            <button @click="addQA"  v-bind:class="[isLoading ? 'loading':'default']">📢</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue"
import { AdviceStore }from '../stores/adviceStore'
import { AdviceKey } from "../stores/adviceKey"

export default defineComponent({
    setup() {

        const { addAdvice, isLoading } = inject(AdviceKey) as AdviceStore

        const isError = ref(false)
        const newQuestion = ref('')
        const validation = () => {

            const schema = /[^(\0|\s+)+]/
            if (!schema.test(newQuestion.value)){
                isError.value = true
                return false
            }
            isError.value = false
            return true
        }

        const addQA = () => {
            if (!validation()){
                return
            }

            addAdvice(newQuestion.value).finally(()=> {
                newQuestion.value = ''
            })
        }

        return {
            addQA,
            newQuestion,
            isError,
            isLoading
        }
    }
    
})
</script>


<style scoped>
li {
    margin-bottom: 1rem;
}

span {
    display: inline-block;
    width: 50px;
}

button {
    cursor:pointer;
    border: none;
    color: white;
    text-decoration: none;

    text-align: center;
    font-size: 1.25rem;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
}

.form-wrap{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
}
.input-wrap{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.loading {
    background-color: rgb(93, 110, 102);
}
.default {
    background-color: #4CAF50;
}

.input {
    font-size: 1.25rem;
    padding: 0.3rem 0.6rem;
    border-radius: 0.5rem;
    border-style: solid 1px;
}
.input_error {
    border-color: #a52403;
}

.input_errorText {
    color:#a52403;
    margin-top: 0.5rem;
}
</style>
