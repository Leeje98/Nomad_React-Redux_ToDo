// expect default () => "Home";

import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id}/>
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToPropa(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToPropa)(Home);
// connect()함수는 React 구성 요소를 Redux 저장소에 연결합니다.
// getState 대신 쓰는 함수인가???
// https://react-redux.js.org/api/connect -참조
