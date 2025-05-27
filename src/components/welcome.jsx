import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1

const Welcome = () => {
  const [fadein, setFadein] = useState(false);
  const navigate = useNavigate(); // ✅ Step 2

  useEffect(() => {
    setTimeout(() => setFadein(true), 200);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white h-screen flex flex-col items-center justify-center">
      <h1
        className={`text-6xl font-extrabold tracking-wide uppercase transition-opacity duration-1000 ${
          fadein ? "opacity-100" : "opacity-0"
        }`}
      >
        Welcome to StayEasy
      </h1>
      <p
        className={`text-lg mt-2 transition-opacity duration-1000 ${
          fadein ? "opacity-100" : "opacity-0"
        }`}
      >
        Experience the best stay with us!
      </p>
      <button
        onClick={() => navigate("/booking")} // ✅ Step 3
        className="p-3 bg-green-500 w-100 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer shadow-black"
      >
        Home page
      </button>
    </div>
  );
};

export default Welcome;
