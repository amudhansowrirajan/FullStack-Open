import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part}: {props.exc}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exc={props.exc1} />
      <Part part={props.part2} exc={props.exc2} />
      <Part part={props.part3} exc={props.exc3} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        <strong>Number of exercises</strong>: {props.total}{" "}
      </p>{" "}
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Content
        part1={part1}
        exc1={exercises1}
        part2={part2}
        exc2={exercises2}
        part3={part3}
        exc3={exercises3}
      />

      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));