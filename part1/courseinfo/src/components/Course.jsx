import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ courses }) => {

  return (
    <>
    <h1>Web development Curriculum</h1>
      {courses.map(course => {
        const total = course.parts.reduce((accu, part) => accu + part.exercises, 0)
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total total={total} />
          </div>
        )
      })}
    </>
  )
}

export default Course