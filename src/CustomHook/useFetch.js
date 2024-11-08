import React, { useState, useEffect } from "react"

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchData() {
        try {
            const response = await fetch(url);
        if(response.status !== 200) throw new Error(`Error ${response.status}: ${response.statusText}`);
        const data = await response.json();
        setData(data);
        }
        catch (error) {
          setError(error.message);
          console.log(error.message)
        }
        finally {
        setLoading(false);
        }
      }
    fetchData();
  }, [url]);
  return { data, loading, error };
}