import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  // Helper function to validate email domain
  const isAxisEmail = (email) => {
    return email.endsWith("@axis.com");
  };

  const signInOrRegister = (e) => {
    e.preventDefault();
    if (!usertype || !email || !password) {
      alert("Please fill all required fields");
      return;
    }

    // Validate email domain
    if (!isAxisEmail(email)) {
      alert("Invalid email domain. Please use an @axis.com email address.");
      return;
    }

    // Simulate registration or login process
    if (isRegister) {
      alert("Registration successful");
      navigate("/");
    } else {
      if (email === "test@axis.com" && password === "password123") {
        alert("Login successful");
        switch (usertype) {
          case "NGO/Government":
            navigate("/NGODashboard");
            break;
          case "Financial/Bank":
            navigate("/FinancialDashboard");
            break;
          default:
            navigate("/");
        }
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isRegister ? "Create an Account" : "Welcome Back!"}
        </h2>
        <form onSubmit={signInOrRegister} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
              placeholder="Enter your email (e.g., name@axis.com)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">User Type</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-300"
              value={usertype}
              onChange={(e) => setUsertype(e.target.value)}
              required
            >
              <option value="">Select User Type</option>
              <option value="NGO/Government">NGO/Government</option>
              <option value="Financial/Bank">Financial/Bank</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300"
          >
            {isRegister ? "Register" : "Sign in"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsRegister(!isRegister)}
            className="text-green-500 hover:underline cursor-pointer"
          >
            {isRegister ? "Sign in here" : "Register here"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Login;