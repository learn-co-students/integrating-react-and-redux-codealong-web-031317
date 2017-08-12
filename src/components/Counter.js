import React from 'react'

export default (props) => {

  let onClickHandler = () => {
      props.store.dispatch({type: 'INCREASE_COUNT'})
  }

  return (
    <div>
      <button onClick={onClickHandler}>Click Me</button>
      <div>{props.store.getState().count}</div>
    </div>
  )
};
