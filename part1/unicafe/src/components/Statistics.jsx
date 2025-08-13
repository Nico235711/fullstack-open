import StatisticLine from "./StatisticLine"

const Statistics = ({ good, neutral, bad }) => {
  const hasFeedback = good === 0 && neutral === 0 && bad === 0
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? "0 %" : `${(good / all) * 100} %`

  return (
    <div>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={all} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive} />
    </div>
  )
}

export default Statistics