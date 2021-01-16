import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TVShowList from "./pages/TVShowList"; // Main Page for searching show list
import TVShowInfo from "./pages/TVShowInfo"; // Show Detail information page

const App = () => {
  return (
    <Router>
      <Route path="/" exact="true">
        <TVShowList />
      </Route>
      <Route path="/shows/:id">
        <TVShowInfo />
      </Route>
    </Router>
  );
};

export default App;
