import React from "react";
import Header from "../components/Header";

const Login: React.FC = () => {
  return (
    <>
    <Header />
    <div className="flex h-screen items-center justify-center bg-gray-background-dark">
      <div className="max-w-md rounded-xl bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">Login</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 p-2"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full rounded-md bg-primary p-2 text-white">Login</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
