import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

const Login=()=>{
      const [username, setusername] = useState("");
      const [password, setpassword] = useState("");
      const navigate= useNavigate();
      const handleLogin=async (e)=>{
        e.preventDefault();

        try {
            const response=await axios.post("http://localhost:3000/api/login",{
                username:username,
                password:password
            });
            const userId=response.data.userId;

            localStorage.setItem("userId", userId);
             
            
            navigate("/booking");
        }
        catch (error) {
            console.error("Login failed:", error);
            alert("Invalid credentials");
          }
      }
    return(
        <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg">
            <h1 className="text-6x1 font-bold text-center space-y-6 text-white mb-5">Login</h1>
            <form action=""
            onSubmit={handleLogin}
            className="flex flex-col items-center space-y-6"
            >
            <input type="text"
            placeholder="UserName"
            className="p-3 rounded-lg text-white space-y-6 border border-amber-50"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            />
            <input type="password"
            placeholder="Password" 
            className="p-3 rounded-lg text-white border border-amber-50"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            />
             <button
            type="submit"
            className="justify-between bg-green-500 w-1/3 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>

          <p className="text-white">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
    

            </div>
            
        </div>
    );
};

export default Login;