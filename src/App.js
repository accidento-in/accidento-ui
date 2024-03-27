import { BrowserRouter, Routes, Route } from "react-router-dom";
import Incidents from "./pages/Incidents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/org/:orgName" element={<Incidents name="xxx" id="1" status="sss" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
