import React from 'react';
import Header from './Header';
import BestBooks from './BestBook';
import BookFormModal from './BookFormModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
              <Route 
              exact path="/2"
              element={<BookFormModal />}
            ></Route>

            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          
        </Router>
      </>
    )
  }
}

export default App;