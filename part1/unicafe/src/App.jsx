import { useState } from 'react'
import Button from './ui/Button'
import Statistics from './components/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodButton = () => setGood(good + 1)
  const increaseNeutralButton = () => setNeutral(neutral + 1)
  const increaseBadButton = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onclick={increaseGoodButton} />
      <Button text={"neutral"} onclick={increaseNeutralButton} />
      <Button text={"bad"} onclick={increaseBadButton} />
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} 
      />
    </div>
  )
}

export default App