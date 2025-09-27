import Part from "./Part";

export default function Content({ parts }) {
  const { name, exercises } = parts

  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}
