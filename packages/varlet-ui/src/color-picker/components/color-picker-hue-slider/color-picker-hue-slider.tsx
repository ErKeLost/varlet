import { computed, defineComponent, ref, onMounted } from 'vue'
import { colorPickerHueSliderProps, ColorPickerHueSliderProps } from './color-picker-hue-slider-types'
import { DOMUtils } from '../../utils/dom-dragger'
import './color-picker-hue-slider.less'
import { HSVA } from '../../utils/color-utils-types'

type DefaultTransition = { transition: string }
export default defineComponent({
  name: 'ColorHueSlider',
  props: colorPickerHueSliderProps,
  emits: ['update:color'],
  setup(props: ColorPickerHueSliderProps, ctx) {
    const DEFAULT_TRANSITION: DefaultTransition = { transition: 'all 0.3s ease' }
    const barElement = ref<HTMLElement | null>(null)
    const cursorElement = ref<HTMLElement | null>(null)
    const clickTransform = ref<DefaultTransition | null>(DEFAULT_TRANSITION)
    const getCursorLeft = () => {
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect()
        const { offsetWidth } = cursorElement.value
        if (props.color?.h === 360) {
          return rect.width - offsetWidth / 2
        }
        return (((props.color as HSVA).h % 360) * (rect.width - offsetWidth)) / 360 + offsetWidth / 2
      }
      return 0
    }

    const getCursorStyle = computed(() => {
      const left = getCursorLeft()
      return {
        left: left + 'px',
        top: 0,
        ...clickTransform.value,
      }
    })

    const onMoveBar = (event: MouseEvent) => {
      event.stopPropagation()
      if (barElement.value && cursorElement.value) {
        const rect = barElement.value.getBoundingClientRect()
        const { offsetWidth } = cursorElement.value
        let left = event.clientX - rect.left
        left = Math.min(left, rect.width - offsetWidth / 2)
        left = Math.max(offsetWidth / 2, left)
        const hue = Math.round(((left - offsetWidth / 2) / (rect.width - offsetWidth)) * 360)
        ctx.emit('update:color', {
          h: hue,
          s: (props.color as HSVA).s,
          v: (props.color as HSVA).v,
          a: (props.color as HSVA).a,
        })
      }
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
        DOMUtils.triggerDragEvent(barElement.value, dragConfig)
      }
    })
    return () => {
      return (
        <div class="var-color-picker-hue-slider">
          <div ref={barElement} class="var-color-picker-hue-slider__bar" onClick={onClickSlider}>
            <div class="var-color-picker-hue-slider__bar-pointer" ref={cursorElement} style={getCursorStyle.value}>
              <div class="var-color-picker-hue-slider__bar-handle"></div>
            </div>
          </div>
        </div>
      )
    }
  },
})