import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PhotoGallery from './components/PhotoGallery';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PhotoGallery} />
      </Switch>
    </Router>
  );
};

export default App;