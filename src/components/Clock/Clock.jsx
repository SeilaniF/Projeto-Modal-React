import { useState, useEffect } from 'react'
import styles from '../Clock/Clock.module.css'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.clockBox}>
        Hora Atual: {time}
      </div>
    </div>
  )
}

export default Clock
