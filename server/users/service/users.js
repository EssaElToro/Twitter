import { useNavigate } from "react-router-dom";
import axios from "axios";

const User = require("../../models/users");

const usersAdd = async (req, res) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await axios.post("/api/users/add", data);

    if (response.data.success) {
      sessionStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
  };

  try {
    const admin = await Admin.findOne({ name: data.login });

    console.log(admin);

    if (!admin) return res.status(200).json({ success: false });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  usersAdd,
};
