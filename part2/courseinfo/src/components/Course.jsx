
const Header = ({ name }) => {

  return (
    <h2>{name}</h2>
  )
}

const Part = ({ part }) => {

  return (
    <p>{part.name} {part.exercises}</p>
  )
}

const Content = ({ parts }) => {
  console.log(parts);  

  return (
    <div>
      {
        parts.map(part => (
          <Part key={part.id} part={part} />
        ))
      }
    </div>
  )
}

const Total = ({ exercises }) => {
  // console.log(exercises); 
  const total = exercises.reduce((accum, part) => accum + part.exercises, 0)
  // console.log(total);

  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({ course }) => {
  console.log(course);

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

export default Course