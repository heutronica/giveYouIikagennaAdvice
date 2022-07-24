<template>
<div class="wrap">
    <h1>Give you iikagen na advice</h1>
    <AdviceAdd />
    <AdviceLog />
</div>
</template>

<script lang="ts">
import { defineComponent, provide } from "vue"

import { AdviceKey } from "./stores/adviceKey"
import { useAdvice } from "./stores/adviceStore"

import AdviceLog from './components/AdviceLog.vue'
import AdviceAdd from "./components/AdviceAdd.vue"

export default defineComponent({
    components: {
        AdviceLog,
        AdviceAdd
    },
    setup(){
        provide(AdviceKey, useAdvice())
        return {}
    }
})
</script>


<style scoped>
.wrap {
    width: 80vw;
    max-width: 700px;
    margin: 0 auto;
}
</style>
