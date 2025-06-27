// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input } from "../Components/ui/input";
// import { Button } from "../Components/ui/button";
// import axios from "axios";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/adminDashboard");
//     } catch (err) {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-20 p-6 border rounded-xl shadow-md">
//       <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//       <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <Input placeholder="Password" type="password" className="mt-2" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <Button onClick={handleLogin} className="mt-4 w-full">Login</Button>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "./reUsableElement/input";
import { Button } from "./reUsableElement/button";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/adminDashboard");
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-700">Admin Login</h2>

        <div className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
          <Button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Login
          </Button>
          {error && (
            <p className="text-red-500 text-sm text-center mt-1">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
