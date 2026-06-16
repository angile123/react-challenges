import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [apiState, setApiState] = useState({ loading: null, error: null, data: null });
  useEffect(() => {
    async function fetchData() {
      setApiState({ loading: true, error: null, data: null });
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Response was not ok");
        const json = await res.json();
        setApiState({ loading: null, error: null, data: json });
      } catch (err) {
        setApiState({ loading: null, error: err, data: null });
      }
    }
    if (url) fetchData();
  }, [url]);
  return apiState;
}
