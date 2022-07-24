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

export function useAdvice() {
    const state = {
        adviceList: ref<QA[]>([{
            id:0,
            question: 'add your advice',
            advice: 'none'
        }]),
        isLoading: ref(false),
    }

    let idCount = 1

    async function addAdvice(newQuestion: string) {
        state.isLoading.value = true
        
        await fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(res => res.json())
        .then(res => 
            state.adviceList.value.unshift({
                id: idCount++,
                question: newQuestion,
                advice:res.slip.advice

            })
        ).finally(()=>{
            state.isLoading.value = false
        }
        )
    }

    const deleteAdvice = (id: number) => {
        state.adviceList.value = state.adviceList.value.filter(qa => qa.id !== id)
    }

    return {
        get adviceList(){
            return state.adviceList
        },
        get isLoading(){
            return state.isLoading
        },
        state,
        addAdvice,
        deleteAdvice
    }
}

export type AdviceStore = ReturnType<typeof useAdvice>