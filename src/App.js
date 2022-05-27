import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListComponent from './components/ListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import EmployeeComponent from './components/EmployeeComponent';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListComponent} />
            <Route path="/employees" component={ListComponent} />
            <Route path="/add-employee/:id" component={EmployeeComponent} />
            <Route path="/view-employee/:id" component={ViewEmployee} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
