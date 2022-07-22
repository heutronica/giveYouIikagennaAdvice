import { ref } from "vue"

type AdviceAPI = {
    slip: {
        id: number,
        advice: string
    }
}

type QA = {
    id: Number,
    question: String,
    advice: String
}

let qaList = ref<QA[]>([{
    id:0,
    question: 'add your advice',
    advice: 'none'
}])

let idCount = 1
let isLoading = ref(false)

export const adviceStore = {
    state: {qaList,isLoading},
    async addAdvice(newQuestion: string){
        isLoading.value = true
        
        await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(res => res.json())
        .then(res => 
            this.state.qaList.value.unshift({
                id: idCount++,
                question: newQuestion,
                advice:res.slip.advice

            })
        ).finally(()=>{
            isLoading.value = false
        }
        )
    },
    deleteAdvice(id: number){
        this.state.qaList.value = this.state.qaList.value.filter(qa => qa.id !== id)
        console.log(this.state.qaList)
    }
}