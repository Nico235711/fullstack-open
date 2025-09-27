import StatisctLine from "./StatisctLine"

export default function Statistics({ good, neutral, bad }) {
  const hasComments = (good + neutral + bad) > 0

  const all = good + neutral + bad
  const average = all ? (good - bad) / all : 0
  const positive = all ? good / all : 0

  return (
    <>
      {hasComments ? (
        <table>
          <tbody>
            <StatisctLine text="good" value={good} />
            <StatisctLine text="neutral" value={neutral} />
            <StatisctLine text="bad" value={bad} />
            <StatisctLine text="all" value={all} />
            <StatisctLine text="average" value={average} />
            <StatisctLine text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}
