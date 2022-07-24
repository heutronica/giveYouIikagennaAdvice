import { InjectionKey } from 'vue'
import { AdviceStore } from './adviceStore'

export const AdviceKey: InjectionKey<AdviceStore> = Symbol('AdviceStore')
