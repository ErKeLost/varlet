import { type PropType } from 'vue'
import { defineListenerProp } from '../utils/components'

export interface VarFile {
  id: number
  file?: File
  name?: string
  url?: string
  cover?: string
  progress?: number
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  state?: 'loading' | 'success' | 'error'
}

export type ValidateTrigger = 'onChange' | 'onRemove'

export const props = {
  modelValue: {
    type: Array as PropType<VarFile[]>,
    default: () => [],
  },
  accept: {
    type: String,
    default: 'image/*',
  },
  capture: {
    type: [String, Boolean] as PropType<boolean | 'user' | 'environment'>,
    default: undefined,
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: true,
  },
  removable: {
    type: Boolean,
    default: true,
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: true,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  validateTrigger: {
    type: Array as PropType<Array<ValidateTrigger>>,
    default: () => ['onChange', 'onRemove'],
  },
  rules: Array as PropType<Array<(v: VarFile) => any>>,
  hideList: Boolean,
  onBeforeFilter: defineListenerProp<(files: VarFile[]) => Promise<VarFile[]> | VarFile[]>(),
  onBeforeRead: defineListenerProp<(file: VarFile) => Promise<any> | any>(),
  onAfterRead: defineListenerProp<(file: VarFile) => any>(),
  onBeforeRemove: defineListenerProp<(file: VarFile) => any>(),
  onRemove: defineListenerProp<(file: VarFile) => any>(),
  onOversize: defineListenerProp<(file: VarFile) => any>(),
  'onUpdate:modelValue': defineListenerProp<(files: VarFile[]) => any>(),
}
