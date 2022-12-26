import { computed, defineComponent, toRefs } from 'vue'
import { colorPickerEditProps, ColorPickerEditProps } from './color-picker-edit-types'
import { createNamespace } from '../../../utils/components'
import { modes as defaultModes } from '../../utils/color-utils'
import './color-picker-edit.less'
import VarButton from '../../../button/index'

const { n, classes } = createNamespace('color-picker-edit')
export default defineComponent({
  name: 'VarColorPickerEdit',
  props: colorPickerEditProps,
  emit: ['update:color', 'update:mode'],
  setup(props: ColorPickerEditProps, { emit }) {
    const { color, mode, alpha, modes } = toRefs(props)
    const enabledModes = computed(() => {
      return modes.value.map((key) => ({ ...defaultModes[key], name: key }))
    })

    const inputs = computed(() => {
      const mode = enabledModes.value.find((m) => m.name === props.mode)
      console.log(mode)
      if (!mode) return []
      console.log(color.value)

      const convertColor = color.value ? mode.to(color.value.hsva) : {}
      console.log(convertColor)

      return mode.inputs?.map(({ getValue, getColor, ...inputProps }) => {
        return {
          ...mode.inputProps,
          ...inputProps,
          disabled: props.disabled,
          value: getValue(convertColor),
          onChange: (e: InputEvent) => {
            const target = e.target as HTMLInputElement | null
            if (!target) return
            emit('update:color', mode.from(getColor(convertColor, target.value)))
          },
        }
      })
    })
    console.log(inputs.value)

    return () => {
      return (
        <div class="var-color-picker-edit">
          {inputs.value?.map((props) => (
            <VColorPickerInput {...props} />
          ))}
          {enabledModes.value.length > 1 && (
            <VarButton
              text
              round
              onClick={() => {
                const mi = enabledModes.value.findIndex((m) => m.name === props.mode)
                emit('update:mode', enabledModes.value[(mi + 1) % enabledModes.value.length].name)
              }}
            >
              <var-icon name="checkbox-marked-circle" color="#fff" />
            </VarButton>
          )}
        </div>
      )
    }
  },
})

const VColorPickerInput = ({ label, ...rest }: any) => {
  return (
    <div class={classes(n('input'))}>
      <input {...rest} />
      <span>{label}</span>
    </div>
  )
}
