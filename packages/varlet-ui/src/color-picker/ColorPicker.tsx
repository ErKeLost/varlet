import { defineComponent, ref, toRefs, onMounted, watch, computed } from 'vue'
import { colorPickerProps, ColorPickerProps } from './props'
import { createNamespace, call } from '../utils/components'
import { parseBaseColor, extractBaseColor, HSVtoCSS, nullColor } from './utils/color-utils'
import VarColorPickerCanvas from './components/color-picker-canvas/color-picker-canvas'
import VarColorPickerEdit from './components/color-picker-edit/color-picker-edit'
import VarColorPickerSwatches from './components/color-picker-swatches/color-picker-swatches'
import VarColorPickerHueSlider from './components/color-picker-hue-slider/color-picker-hue-slider'
import VarColorPickerAlphaSlider from './components/color-picker-alpha-slider/color-picker-alpha-slider'
import { HSV } from './utils/color-utils-types'
import './colorPicker.less'
import '../styles/elevation.less'

export default defineComponent({
  name: 'VarColorPicker',
  props: colorPickerProps,
  setup(props: ColorPickerProps) {
    const { n, classes } = createNamespace('color-picker')
    const DEFAULT_MODE = 'rgba'

    const { modelValue, mode, disabled, modes } = toRefs(props)
    const currentMode = ref(DEFAULT_MODE)
    const dragTransferFlag = ref<boolean>(false)
    const initialColor = ref<any>()

    const containerStyle = computed(() => {
      return {
        width: `${props.width}px`,
        maxWidth: `${props.width}px`,
      }
    })

    const dotStyle = computed(() => {
      const defaultColor = HSVtoCSS(initialColor.value ?? nullColor)
      return {
        background: defaultColor,
        border: `1px solid ${defaultColor}`,
      }
    })

    watch(
      () => modelValue.value,
      (newV) => {
        if (!dragTransferFlag.value) {
          handleInjectColor(newV)
        }
      },
      {
        immediate: true,
      }
    )

    watch(
      () => mode.value,
      (newV) => {
        handleUpdateMode(newV)
      },
      {
        immediate: true,
      }
    )

    onMounted(() => {
      if (!props.modes.includes(mode.value)) mode.value = props.modes[0]
    })

    function handleUpdateColor(color: HSV) {
      handleInjectColor(color)
      const value = extractBaseColor(parseBaseColor(color) ?? nullColor, props.modelValue)
      call(props['onUpdate:modelValue'], value)
    }

    function handleInjectColor(color: any) {
      initialColor.value = parseBaseColor(color) ?? nullColor
    }

    function handleUpdateMode(mode: string) {
      currentMode.value = mode
    }

    function handleDragger(flag: boolean) {
      dragTransferFlag.value = flag
    }

    return () => {
      return (
        <>
          <div class={classes(n(), n('$-elevation--2'))} style={containerStyle.value}>
            <div></div>
            {props.canvasLayout && (
              <VarColorPickerCanvas
                width={props.width}
                height={props.canvasHeight}
                color={initialColor.value}
                onUpdate:color={handleUpdateColor}
                dragger={handleDragger}
                disabled={disabled.value}
              />
            )}
            {(props.sliderLayout || props.inputLayout) && (
              <div class={n('control')}>
                {props.sliderLayout && (
                  <div class={n('preview')}>
                    <div class={n('preview__dots')}>
                      <div style={dotStyle.value} />
                    </div>
                    <div class={n('preview__slider')}>
                      <VarColorPickerHueSlider
                        color={initialColor.value}
                        disabled={disabled.value}
                        onUpdate:color={handleUpdateColor}
                        dragger={handleDragger}
                      />

                      {currentMode.value.endsWith('a') ? (
                        <VarColorPickerAlphaSlider
                          color={initialColor.value}
                          disabled={disabled.value}
                          onUpdate:color={handleUpdateColor}
                          dragger={handleDragger}
                        />
                      ) : null}
                    </div>
                  </div>
                )}
                {props.inputLayout && (
                  <VarColorPickerEdit
                    color={initialColor.value}
                    onUpdate:color={handleUpdateColor}
                    disabled={disabled.value}
                    modes={modes.value}
                    mode={currentMode.value}
                    onUpdate:mode={handleUpdateMode}
                  />
                )}
              </div>
            )}
            {props.swatchesLayout && (
              <VarColorPickerSwatches
                color={initialColor.value}
                onUpdate:color={handleUpdateColor}
                disabled={disabled.value}
              />
            )}
          </div>
        </>
      )
    }
  },
})
