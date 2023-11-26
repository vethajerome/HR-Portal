import { useState, useEffect } from "react";

const URL = 'http://localhost:2008/users';

export default function Name() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  // Access the last value in the results array
  const lastValue = results.length > 0 ? results[results.length - 1] : null;

  // Extract the "name" property from the last object
  const lastName = lastValue ? lastValue.name : null;

  // Now you can use the lastName in your component
  return (
    <div>
      {lastName ? (
        <h1> {lastName}</h1>
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
}