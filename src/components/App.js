import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return <div>
    <Link to='/pagetwo'>Navigate to Page Two<br/></Link>
    PageOne</div>
}


const PageTwo = () => {
  return <div>PageTwo
    <br /><Link to='/'>Navigate to Page One</Link>
   <br /> <button>Click Me</button>
  </div>
};
const Extra = () => {
  return <div>Extra Extra
    <button>Click Me</button>
  </div>
};


const App = () => {
  return <div>
    <BrowserRouter>
    <div>
      <Route path="/" exact component={PageOne} />
      <Route path="/pagetwo" exact component={PageTwo} />
      <Route path="/pagetwo/extra" component={Extra} />
    </div>
    </BrowserRouter>
  </div>;
};

export default App;