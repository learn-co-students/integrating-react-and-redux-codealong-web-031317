export default function createStore(reducer){
  let state;

  function getState(){
    return state
  }

  function dispatcher(action){
    state = reducer(state, action)
    render()
  }

  return {
    dispatch,
    getState
  }
}

function render(){

}
