import { useState } from 'react'
import Button from './ui/Button'
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? "0 %" : `${(good / all) * 100} %`

  const increaseGoodButton = () => setGood(good + 1)
  const increaseNeutralButton = () => setNeutral(neutral + 1)
  const increaseBadButton = () => setBad(bad + 1)
  const hasFeedback = good === 0 && neutral === 0 && bad === 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onclick={increaseGoodButton} />
      <Button text={"neutral"} onclick={increaseNeutralButton} />
      <Button text={"bad"} onclick={increaseBadButton} />
      <h2>statistics</h2>
      {hasFeedback ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Statistics text={"good"} value={good} />
          <Statistics text={"neutral"} value={neutral} />
          <Statistics text={"bad"} value={bad} />
          <Statistics text={"all"} value={all} />
          <Statistics text={"average"} value={average} />
          <Statistics text={"positive"} value={positive} />
        </>
      )}
    </div>
  )
}

export default App