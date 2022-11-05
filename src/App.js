import './App.css'
import './queries.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Contact from './Routes/Contact'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <Content /> */}
        {/* <Footer /> */}

        <Routes>
          <Route path="/" element={<Content />} />
          {/* <Route path="/" element={<Footer />} /> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/redirect" element={<Navigate to="/contact" />} />
          {/* <Redirect to="/contact" /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
