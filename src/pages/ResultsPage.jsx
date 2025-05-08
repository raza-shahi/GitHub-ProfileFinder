import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const { state } = useLocation();
  const userData = state?.userData;

  if (!userData) {
    return (
      <>
      <div className="min-h-screen text-center py-8">No user data found</div>
      </>
    );
  }

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-50">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div className="flex items-center gap-6">
                <img 
                  src={userData.avatar_url} 
                  alt={`${userData.login}'s avatar`}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <div>
                  <h1 className="text-3xl font-bold">{userData.name || userData.login}</h1>
                  <p className="text-blue-100">{userData.bio || 'No bio available'}</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Followers" value={userData.followers} icon="👥" />
              <StatCard label="Following" value={userData.following} icon="🔄" />
              <StatCard label="Public Repos" value={userData.public_repos} icon="📦" />
              <StatCard label="Location" value={userData.location || 'Unknown'} icon="📍" />
            </div>

            {/* Additional Info */}
            <div className="p-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="GitHub Since" value={new Date(userData.created_at).toLocaleDateString()} />
                <InfoItem label="Company" value={userData.company || 'Not specified'} />
                <InfoItem label="Website" value={userData.blog || 'Not specified'} isLink={true} />
                <InfoItem label="Twitter" value={userData.twitter_username ? `@${userData.twitter_username}` : 'Not specified'} />
              </div>
            </div>

            {/* Action Button */}
            <div className="p-6 border-t border-gray-200 text-center">
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="mr-2">View Full Profile on GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Reusable components for the results page
const StatCard = ({ label, value, icon }) => (
  <div className="bg-gray-50 p-4 rounded-lg text-center">
    <span className="text-2xl mb-2 inline-block">{icon}</span>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

const InfoItem = ({ label, value, isLink = false }) => (
  <div className="mb-2">
    <p className="text-gray-500 text-sm">{label}</p>
    {isLink && value !== 'Not specified' ? (
      <a href={value.startsWith('http') ? value : `https://${value}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {value}
      </a>
    ) : (
      <p className="font-medium">{value}</p>
    )}
  </div>
);

export default ResultsPage;