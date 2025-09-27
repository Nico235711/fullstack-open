
export default function Total({ parts }) {
  const total = parts.reduce((accu, part) => accu + part.exercises, 0)

  return <p>Number of exercises {total}</p>
}
