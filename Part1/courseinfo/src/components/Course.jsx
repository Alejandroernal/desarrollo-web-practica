import React from 'react'
import App from '../App'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
    {parts.map((part)=><Part key={part.id} name={part.name} exercises={part.exercises}></Part>)}


      {/*
      Lo que recorre es cada objeto las partes seleccionadas, en vez de limitar el objeto.

      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
      */}
    </div>
  )
}



const Total = (props) => {
    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = ({course, courses}) => {
  return (
    <div>
        
    <Header course={course.name}/>

    <Content parts={course.parts}/>

    <Total parts={course.parts} />
    </div>
  )
}

export default Course

