import { Link } from "react-router-dom"
import { useState } from "react"
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi"

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-2">
                    Create an Account
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Join us and start shopping
                </p>

                <form className="space-y-5">
                    {/* NAME */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

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
                                placeholder="Create a password"
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

                    {/* BUTTON */}
                    <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90 transition">
                        Sign Up
                    </button>
                </form>

                {/* FOOTER */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUp
