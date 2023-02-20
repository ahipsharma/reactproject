import React from 'react'
import Restaurent from './components/Basics/Restaurent';
import UseState from './components/hooks/useState';
import UseEffect from './components/hooks/useEffect';
import UseReducer from './components/hooks/useReducer';
import Todo from './components/todo/todo';

const App = () => {
  return(
    // <div>
    //   <h1>Hello World!!!</h1>
    // </div> // One return statement can return single values, so enclose everything within 1 div/section/segment.
    // <React.Fragment>
    //   <h1>Hello World!!!</h1>
    // </React.Fragment> // To use React Fragment tag must import React using - import React from 'react'
    <>
      <Todo  />
    </>
  );
};

// function App(){
//   return <h2>Hello World!!!</h2>
// }

export default App