import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Dashboard } from "./pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
