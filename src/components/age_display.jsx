import { useState, useEffect } from 'react'
import { properPluralize } from '../helpers'
import STATE from '../data/state'

export const AgeDisplay = () => {
  const current = new Date()
  const { birthday } = STATE
  const yearsOld = Math.floor(Math.abs(current - birthday) / 3.154e10)
  const [seconds, setSeconds] = useState(
    Math.ceil(Math.abs(current - birthday) / 1000),
  )

  useEffect(() => {
    const id = setInterval(() => setSeconds(seconds + 1), 1000)
    return () => clearInterval(id)
  })

  return (
    <span>
      <code>{seconds}</code> {properPluralize(seconds, 'second')}, (
      <code className="state">{yearsOld}</code> years old)
    </span>
  )
}
