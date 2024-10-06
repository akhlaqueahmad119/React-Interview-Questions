export const increment = (data) => {
  return {
    type: "increment",
    payload:data
  }
}
export const decrement = (data) => {
  return {
    type: "decrement",
    payload: data,
  };
};