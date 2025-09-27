import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

export default function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" onClick={increaseGood} />
      <Button text="neutral" onClick={increaseNeutral} />
      <Button text="bad" onClick={increaseBad} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}