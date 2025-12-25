import { Link } from "react-router-dom"
import { useState } from "react"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
                <p className="text-center text-gray-500 mb-6">
                    Please login to your account
                </p>

                <form className="space-y-5">
                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                            >
                                {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                            </button>
                        </div>
                    </div>

                    {/* FORGOT */}
                    <div className="flex justify-end">
                        <button className="text-sm text-gray-600 hover:underline">
                            Forgot password?
                        </button>
                    </div>

                    {/* BUTTON */}
                    <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition">
                        Login
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
    )
}

export default Login
