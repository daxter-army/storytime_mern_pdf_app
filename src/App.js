import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Pdfpage from './pages/Pdfpage/Pdfpage'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/view' component={Pdfpage} />
          <Route path='/' component={Homepage} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
