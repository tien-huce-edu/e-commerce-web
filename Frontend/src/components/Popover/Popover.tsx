import { FloatingPortal, arrow, offset, shift, useFloating } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

interface PopoverProps {
  children: React.ReactNode
  renderPopover?: React.ReactNode
  className?: string
}

export default function Popover({ children, className, renderPopover }: PopoverProps) {
  const [open, setOpen] = useState(false)
  const arrowRef = useRef(null)

  const { x, y, refs, middlewareData, strategy } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(5),
      shift(),
      arrow({
        element: arrowRef
      })
    ]
  })

  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }
  return (
    <div className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
            >
              <span
                ref={arrowRef}
                className='border-x-transparent border-t-transparent border-b-white border-[11px] absolute -translate-y-[99%] z-20'
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  )
}
