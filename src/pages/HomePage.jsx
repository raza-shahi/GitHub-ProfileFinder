import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const HomePage = () => {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const fetchUserData = async () => {
      if (!username.trim()) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${username.trim()}`);
        
        if (!response.ok) {
          throw new Error(response.status === 404 
            ? 'User not found' 
            : 'Failed to fetch user data');
        }
  
        const data = await response.json();
        navigate('/results', { state: { userData: data } });
        
      } catch (error) {
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };
    
    return (
      <div className="min-h-screen grid grid-rows">
        <main className="container mx-auto px-4 py-8">
          <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome to GitHub Name Finder
              </h1>
              <p className="text-gray-600 text-lg">
                Easily search for any GitHub username to find profiles
              </p>
            </div>
  
            <div className="w-full max-w-xl space-y-4">
              {error && <div className="text-red-500">{error}</div>}
              <div className="flex gap-4">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Enter GitHub username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && fetchUserData()}
                />
                <button
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer disabled:bg-blue-400"
                  onClick={fetchUserData}
                  disabled={loading || !username.trim()}
                >
                  {loading ? 'Searching...' : 'Search'}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default HomePage;
