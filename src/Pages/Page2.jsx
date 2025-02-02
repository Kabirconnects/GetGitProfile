import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Hook to access URL parameters

function Page2() {
  const { find } = useParams(); // Get GitHub username from URL
  const [getData, setGetData] = useState(null);
  const [repos, setRepos] = useState([]);

  // Fetch GitHub user data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/${find}`);
      const data = await response.json();
      setGetData(data);
    };
    fetchData();
  }, [find]);

  // Fetch user's repositories after user data is loaded
  useEffect(() => {
    if (getData) {
      const fetchRepos = async () => {
        const repoResponse = await fetch(getData.repos_url);
        const repoData = await repoResponse.json();
        setRepos(repoData);
      };
      fetchRepos();
    }
  }, [getData]);

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-5 text-white">
      {getData ? (
        <div className="flex flex-col items-center mt-20">
          <div className="bg-black p-5 rounded-2xl border-2 border-white text-center w-fit">
            <div className="flex flex-col items-center">
              <img
                src={getData.avatar_url}
                alt="Avatar"
                className="w-32 h-32 rounded-full"
              />
              <h1 className="text-2xl mt-3">{getData.name}</h1>
              <a
                className="mt-4 block text-blue-500"
                href={getData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-2xl mt-3">@{getData.login}</h1>
              </a>
            </div>

            <p className="text-sm text-gray-400">{getData.bio}</p>
            <p className="text-sm text-gray-400">🌍 {getData.location}</p>

            <div className="mt-3 flex gap-5 text-gray-300 justify-center">
              <p>🗒️ Public Repos: {getData.public_repos}</p>
              <p>👥 Followers: {getData.followers}</p>
              <p>🔗 Following: {getData.following} </p>
            </div>
          </div>

          {/* Display repositories */}
          {repos.length > 0 && (
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 mt-20">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-black border border-white rounded-xl hover:scale-105 transition"
                >
                  <h2 className="text-lg text-white">🗒️ {repo.name}</h2>
                  <p className="text-sm text-gray-400">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex justify-between text-gray-200 mt-2 text-sm">
                    <p>🌟 {repo.stargazers_count}</p>
                    <p>🍴 {repo.forks_count}</p>
                    <p>🔹 {repo.language || "Unknown"}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Page2;
