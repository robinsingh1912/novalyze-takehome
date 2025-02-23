import React from "react";
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <div className="flex h-screen items-center justify-center bg-gray-background-dark">
        <div className="max-w-lg rounded-xl bg-white p-8 shadow-md">
            <h1 className="text-3xl font-bold text-gray-900">Welcome to the Home Page</h1>
            <p className="mt-4 text-gray-600">
            This is the main landing page of the app.
            </p>
        </div>
        </div>
    </>
  );
};

export default Home;
