import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../components/Button";

import {auth,googleprovider} from "../config/firebase"
import {createUserWithEmailAndPassword,signOut, signInWithPopup} from "firebase/auth"

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleAuthMode = () => setIsSignIn(!isSignIn);

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signin = async () => {
        try{
            await createUserWithEmailAndPassword(auth,email,password);
        } catch (err){
            console.error(err);
        }
    }
    
    const signingoogle = async () => {
        try{
            await signInWithPopup(auth,googleprovider);
        } catch (err){
            console.error(err);
        }
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-pink-300 text-center p-4">
      <h1 className="text-4xl font-bold text-black mb-6">
        {isSignIn ? "Sign In to Your Account" : "Create a New Account"}
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 space-y-4">

        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <Button className="w-full py-2 mt-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors" onClick={signin}>
          {isSignIn ? "Sign In" : "Sign Up"}
          
        </Button>

        <div>or</div>

        <button 
          className="flex items-center justify-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded-lg shadow-md w-full mt-4 transition-transform transform hover:scale-105"
          onClick={signingoogle}
        >
          <FcGoogle size={20} /> Sign In with Google
        </button>

        <p className="text-gray-600 mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleAuthMode}
            className="text-purple-600 cursor-pointer hover:underline"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
