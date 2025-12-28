import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import axios from "axios";

// LOGIN  username: 'emilys', password: 'emilyspass'

const Login = () => {
  const navigate = useNavigate(); // hook for navigation

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "", // success | error
  });

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true); //  start loading

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      //  SUCCESS POPUP
      setPopup({
        show: true,
        message: "Login successful!",
        type: "success",
      });

      // OPTIONAL: save token
      localStorage.setItem("token", response.data.token);

      // Redirect after short delay
      setTimeout(() => {
        navigate("/home");
      }, 1500);

      //  OLD CODE COMMENTED
      // navigate("/home");
    } catch (error) {
      //  OLD console.error commented
      // console.error("Login error:", error.response?.data?.message || error.message);

      //  ERROR POPUP
      setPopup({
        show: true,
        message: error.response?.data?.message || "Something went wrong!",
        type: "error",
      });
    } finally {
      setIsLoading(false); //  stop loading

      // Auto close popup
      setTimeout(() => {
        setPopup({ show: false, message: "", type: "" });
      }, 3000);
    }
  }

  return (
    <>
      {/*  POPUP MESSAGE */}
      {popup.show && (
        <div
          className={`fixed top-35 right-135 z-50 px-6 py-4 rounded-lg shadow-lg text-white transition-all
            ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {popup.message}
        </div>
      )}

      {/* LOGIN PAGE */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-gray-500 mb-6">
            Please login to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* USERNAME */}
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-md transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black text-white hover:opacity-90"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
