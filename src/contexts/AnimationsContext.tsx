import React, { createContext, useState } from 'react'

interface AnimationsContextProps {
  sceneToMove: string
  setSceneToMove: (sceneToMove: string) => void
}

export const AnimationsContext = createContext({} as AnimationsContextProps)

export function AnimationsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [sceneToMove, setSceneToMove] = useState<string>('')

  return (
    <AnimationsContext.Provider
      value={{
        sceneToMove,
        setSceneToMove,
      }}
    >
      {children}
    </AnimationsContext.Provider>
  )
}
