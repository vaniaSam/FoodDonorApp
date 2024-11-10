import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { DonorPage } from './DonorPage';
import { ReceiverPage } from './User';
import { EligibilityForm } from './EligibilityForm';

function App() {
  const [userRole, setUserRole] = useState(null); // Track user role (donor or receiver)

  return (
    <Router>
      <div>
        <h1>Food Donation App</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/donor" component={DonorPage} />
          <Route path="/receiver" component={ReceiverPage} />
          <Route path="/eligibility" component={EligibilityForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
