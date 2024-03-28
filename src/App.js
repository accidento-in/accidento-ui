import { BrowserRouter, Routes, Route } from "react-router-dom";
import Incidents from "./pages/Incidents";
import Register from "./pages/Register";
import CreateIncident from "./pages/CreateIncident";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/incident" element={<CreateIncident />} />
        <Route path="/org/:orgName" element={<Incidents name="xxx" id="1" status="sss" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
