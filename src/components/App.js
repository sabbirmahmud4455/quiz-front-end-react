import "../assets/styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Layout>
        <Routes> 
          <Route exact path="/" element={< Home />}></Route>
          <Route exact path="/login" element={< Login />}></Route>
          <Route exact path="/signup" element={< Signup />}></Route>
          <Route exact path="/quiz" element={< Quiz />}></Route>
          <Route exact path="/result" element={< Result />}></Route>
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;
