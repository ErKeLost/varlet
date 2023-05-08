import { defineComponent, watch, Transition, Teleport } from 'vue'
import { props } from './props'
import { useLock } from '../context/lock'
import { useZIndex } from '../context/zIndex'
import { useRouteListener, useTeleport, createNamespace, call } from '../utils/components'

import '../styles/common.less'
import './popup.less'

const { n, classes } = createNamespace('popup')

export default defineComponent({
  name: 'VarPopup',
  inheritAttrs: false,
  props,
  setup(props, { slots, attrs }) {
    const { zIndex } = useZIndex(() => props.show, 3)
    const { disabled } = useTeleport()

    const hidePopup = () => {
      const { closeOnClickOverlay, onClickOverlay } = props

      call(onClickOverlay)

      if (!closeOnClickOverlay) {
        return
      }

      call(props['onUpdate:show'], false)
    }

    useLock(
      () => props.show,
      () => props.lockScroll
    )

    watch(
      () => props.show,
      (newValue: boolean) => {
        newValue ? call(props.onOpen) : call(props.onClose)
      }
    )

    // internal for Dialog
    useRouteListener(() => call(props.onRouteChange))

    const renderOverlay = () => {
      const { overlayClass = '', overlayStyle } = props

      return (
        <div
          class={classes(n('overlay'), overlayClass)}
          style={{
            zIndex: zIndex.value - 1,
            ...overlayStyle,
          }}
          onClick={hidePopup}
        />
      )
    }

    const renderContent = () => {
      return (
        <div
          class={classes(
            n('content'),
            n(`--${props.position}`),
            [props.defaultStyle, n('--content-background-color')],
            [props.defaultStyle, n('$-elevation--3')],
            [props.safeArea, n('--safe-area')],
            [props.safeAreaTop, n('--safe-area-top')]
          )}
          style={{ zIndex: zIndex.value }}
          {...attrs}
        >
          {call(slots.default)}
        </div>
      )
    }

    const renderPopup = () => {
      const { onOpened, onClosed, show, overlay, transition, position } = props

      return (
        <Transition name={n('$-fade')} onAfterEnter={onOpened} onAfterLeave={onClosed}>
          <div class={classes(n('$--box'), n())} style={{ zIndex: zIndex.value - 2 }} v-show={show}>
            {overlay && renderOverlay()}
            <Transition name={transition || n(`$-pop-${position}`)}>{show && renderContent()}</Transition>
          </div>
        </Transition>
      )
    }

    return () => {
      const { teleport } = props

      if (teleport) {
        return (
          <Teleport to={teleport} disabled={disabled.value}>
            {renderPopup()}
          </Teleport>
        )
      }

      return renderPopup()
    }
  },
})
