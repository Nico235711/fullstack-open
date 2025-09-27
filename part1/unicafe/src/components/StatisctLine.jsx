
export default function StatisctLine({ text, value }) {

  return (
    <tr>
      <td>{text === "positive" ? `${text} ${value}%`: `${text} ${value}`}</td>
    </tr>
  )
}
