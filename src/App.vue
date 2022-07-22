<template>
<div class="wrap">
    <h1>Give you iikagen na advice</h1>
    <AdviceAdd />
    <AdviceLog />
</div>
</template>

<script lang="ts">
import { defineComponent} from "vue"

import AdviceLog from './components/AdviceLog.vue'
import AdviceAdd from "./components/AdviceAdd.vue"

export default defineComponent({
    components: {
        AdviceLog,
        AdviceAdd
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
