import { useState } from 'react'

const Button = ({ text, handleClick }) => {

  return (
    <button type="button" onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad
  if (sum === 0) {
    return (
      <h2>No feedback given</h2>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={(good * 1 + neutral * 0 + bad * -1) / sum} />
          <StatisticLine text="positive" value={`${good / sum * 100} %`} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {

  return (
    <tr>
      <td>{text} {value}</td>
    </tr>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>given feedback</h2>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App