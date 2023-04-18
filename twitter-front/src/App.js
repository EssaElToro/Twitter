import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Dashboard, Register, Email, Reminder, Password } from "./pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/email" element={<Email />} />
          <Route path="/forget-password" element={<Reminder />} />
          <Route
            path="/forget-password/change-password"
            element={<Password />}
          />{" "}
          "
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
