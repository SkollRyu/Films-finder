import { useEffect, React } from "react";

// ce776482

const API_KEY = "http://www.omdbapi.com?apikey=ce776482";

const App = () => {
  const searchMovies = async (title) => {
    const repos = await fetch(`${API_KEY}&s=${title}`);
    const data = await repos.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
