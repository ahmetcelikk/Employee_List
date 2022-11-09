import React from "react";
// import Background from './images/yapikredi.png';
import Background from './images/yk1.png';
import { Route, Switch } from 'react-router-dom';
// import { EmployeeList } from './components/EmployeeList';
import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';

const sectionStyle = {
  backgroundImage: `url(${Background})`
};

function App() {
  return (
    <GlobalProvider>
      <div className="App" style={{ sectionStyle}}>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;