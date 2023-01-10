import type { PropType, ExtractPropTypes } from 'vue'
import { fromRGBA } from '../../utils/color-utils'
import type { HSVA } from '../../utils/color-utils-types'

export const colorPickerPaletteProps = {
  color: {
    type: Object as PropType<HSVA>,
    default: () => fromRGBA({ r: 255, g: 0, b: 0, a: 1 }),
  },
  height: {
    type: [Number, String],
    default: 150,
  },
  width: {
    type: [Number, String],
    default: 300,
  },
}

export type ColorPickerPaletteProps = ExtractPropTypes<typeof colorPickerPaletteProps>