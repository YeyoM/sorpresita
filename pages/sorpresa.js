import classes from '../styles/Home.module.css'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { useEffect, useState, useCallback, useRef } from 'react'
import Head from 'next/head'

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
}

export default function Sorpresa() {

  const refAnimationInstance = useRef(null)

  const [audio, setAudio] = useState(null)

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    })

    makeShot(0.2, {
      spread: 60
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    })

  }, [makeShot])

  useEffect(() => {
    fire()
    setAudio(new Audio('/audio/las_mañanitas_saturadas.mp3'))
  }, [fire])

  useEffect(() => {
    if (audio) {
      audio.play()
    }
  }, [audio])

  return (
    <div className={classes.sorpresa} >
      <Head>
        <title>Feliz cum</title>
        <link rel="icon" href="/cum.svg" />
      </Head>
      <h1 className={classes.cum}>Feliz cum!</h1>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </div>
  )
}