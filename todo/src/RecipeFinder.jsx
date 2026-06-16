import { useState } from "react";
import useFetch from "./hooks/fetch";
import Meals from "./components/Meals";
export default function RecipeFinder() {
  const [url, setUrl] = useState(null);
  const { loading, error, data } = useFetch(url);
  console.log(data);
  function handleForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get("term");
    setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="term">Search Recipe</label>
        <input type="text" id="term" name="term" />
        <button>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>An error has occurred</p>}

      {data && <Meals {...{ data }} />}
    </div>
  );
}
