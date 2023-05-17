import { useProgress } from '@react-three/drei'

export function LoadingScreen({
  onStart,
  visible,
}: {
  onStart: () => void
  visible: boolean
}) {
  const { progress, loaded } = useProgress()

  if (visible) {
    return (
      <div className="max-w-screen w-full mx-auto bg-red flex flex-col justify-center items-center pt-48 fixed top-0 left-0 text-center">
        {progress === 100 && loaded ? (
          <button
            onClick={onStart}
            className="text-[4rem] text-greenyellow animate-pulse"
          >
            START
          </button>
        ) : (
          <div className="flex flex-col gap-16 items-center">
            <h1 className="text-[4rem] text-greenyellow animate-pulse">
              LOADING
            </h1>
            <div className="bg-transparent w-48 h-48 rounded-full border-2 border-greenyellow flex items-center justify-center">
              <span className="text-[2rem] text-greenyellow">
                {progress.toFixed(0)} %
              </span>
            </div>
          </div>
        )}
      </div>
    )
  } else return null
}
