import { computed, defineComponent, ref, onMounted } from 'vue'
import { colorPickerHueSliderProps, ColorPickerHueSliderProps } from './color-picker-hue-slider-types'
import { DOMUtils } from '../../utils/dom-dragger'
import { HSV } from '../../utils/color-utils-types'
import { call, createNamespace } from '../../../utils/components'
import { nullColor } from '../../utils/color-utils'
import './color-picker-hue-slider.less'

type DefaultTransition = { transition: string }
export default defineComponent({
  name: 'ColorHueSlider',
  props: colorPickerHueSliderProps,
  setup(props: ColorPickerHueSliderProps) {
    const { n } = createNamespace('color-picker-hue-slider')
    const DEFAULT_TRANSITION: DefaultTransition = { transition: 'all 0.3s ease' }

    const barElement = ref<HTMLElement | null>(null)
    const cursorElement = ref<HTMLElement | null>(null)
    const clickTransform = ref<DefaultTransition | null>(DEFAULT_TRANSITION)
    const moveColor = ref<HSV | null>(null)

    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect()

        const { offsetWidth } = cursorElement.value

        if (props.color?.h === 360) {
          return rect.width - offsetWidth / 2
        }
        const left = (((props.color as HSV)?.h % 360) * (rect.width - offsetWidth)) / 360 + offsetWidth / 2
        const targetLeft = isNaN(left) ? offsetWidth / 2 : left

        if (targetLeft <= rect.width) {
          return targetLeft
        }
        return rect.width
      }
      return 0
    }

    const getCursorStyle = computed(() => {
      const left = getCursorLeft()

      return {
        left: `${left}px`,
        top: 0,
        ...clickTransform.value,
      }
    })

    const onMoveBar = (event: MouseEvent) => {
      event.stopPropagation()
      if (props.disabled || !barElement.value || !cursorElement.value) return
      const rect = barElement.value.getBoundingClientRect()
      const { offsetWidth } = cursorElement.value
      let left = event.clientX - rect.left
      left = Math.min(left, rect.width - offsetWidth / 2)
      left = Math.max(offsetWidth / 2, left)
      const hue = Math.round(((left - offsetWidth / 2) / (rect.width - offsetWidth)) * 360)
      moveColor.value = {
        h: hue,
        s: (props.color as HSV).s,
        v: (props.color as HSV).v,
        a: (props.color as HSV).a,
      }
      call(props['onUpdate:color'], moveColor.value ?? nullColor)
    }

    const onClickSlider = (event: Event) => {
      if (event.target !== barElement.value) {
        onMoveBar(event as MouseEvent)
      }
    }

    onMounted(() => {
      const dragConfig = {
        drag: (event: Event) => {
          clickTransform.value = null
          onMoveBar(event as MouseEvent)
        },
        end: (event: Event) => {
          clickTransform.value = DEFAULT_TRANSITION
          onMoveBar(event as MouseEvent)
        },
      }

      if (barElement.value && cursorElement.value) {
        DOMUtils.triggerDragEvent(barElement.value as HTMLElement, dragConfig)
      }
    })

    return () => {
      return (
        <div class={[n(), props.disabled ? n('disabled') : null]}>
          <div ref={barElement} class={n('bar')} onClick={onClickSlider}>
            <div class={n('bar-pointer')} ref={cursorElement} style={getCursorStyle.value}>
              <div class={n('bar-handle')}></div>
            </div>
          </div>
        </div>
      )
    }
  },
})
