import "bootstrap/dist/css/bootstrap.min.css";
import Logins from "./Logins";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return code ? <Dashboard code={code} /> : <Logins />;
}

export default App;
