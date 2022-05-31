import "../assets/styles/App.css"
import Layout from "./Layout";
// import Home from "./pages/Home";
// import Login from "./pages/login/Login";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
// import Signup from "./pages/signup/Signup";


function App() {
  return (
      <Layout>
        {/* <Home/>
        <Login/>
        <Signup/> */}
        {/* <Quiz/> */}
        <Result/>
      </Layout>
  );
}

export default App;
