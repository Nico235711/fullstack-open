import { useState } from 'react'

const Button = ({ text, onClick }) => {

  return (
    <button type='button' onClick={onClick} >{text}</button>
  )
}

const StatisticsDetails = ({ text, value }) => {
  console.log(text, value);

  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => { setGood(good + 1) }
  const increaseBad = () => { setBad(bad + 1) }
  const increaseNeutral = () => { setNeutral(neutral + 1) }
  const sum = good + bad + neutral
  const average = (good * 1 + bad * -1 + neutral * 0) / sum
  const percentage = parseFloat(good / sum) * 100

  return (
    <div>
      <h2>give me feedbak</h2>
      <Button text="good" onClick={increaseGood} />
      <Button text="bad" onClick={increaseBad} />
      <Button text="neutral" onClick={increaseNeutral} />
      <h2>statistics</h2>
      <StatisticsDetails text="good" value={good} />
      <StatisticsDetails text="bad" value={bad} />
      <StatisticsDetails text="neutral" value={neutral} />
      <StatisticsDetails text="all" value={sum} />
      <StatisticsDetails text="average" value={average} />
      <StatisticsDetails text="positive" value={`${percentage} %`} />
    </div>
  )
}

export default App