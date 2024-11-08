import React from "react";
import useFetch from "./useFetch";
const UserList1 = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading,error } = useFetch(url);

  if (loading) return <p>Loading...</p>
   if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {data.map((item) => 
    <li key={item.id}>{ item.title}</li> 
      )}
    </ul>
  )
};

export default React.memo(UserList1);
