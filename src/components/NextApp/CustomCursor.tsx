import { useEffect, useRef } from 'react'

import '@/styles/cursor.css'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return
    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;',
      )
    })
    document.addEventListener('click', () => {
      if (cursorRef.current == null) return
      cursorRef.current.classList.add('expand')
      setTimeout(() => {
        if (cursorRef.current == null) return
        cursorRef.current.classList.remove('expand')
      }, 500)
    })
  }, [])

  return (
    <div
      onClick={() => {
        cursorRef.current?.classList.add('expand')
        setTimeout(() => {
          if (cursorRef.current == null) return
          cursorRef.current.classList.remove('expand')
        }, 500)
      }}
      onMouseMove={(e: any) => {
        cursorRef.current?.setAttribute(
          'style',
          'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;',
        )
      }}
      className="z-50 w-8 h-8 border hover:scale-50 border-greenyellow absolute pointer-events-none rounded-full"
      ref={cursorRef}
    ></div>
  )
}
