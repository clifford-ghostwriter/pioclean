export const addToLocalStorage = (name, data) => {
  localStorage.setItem("name", JSON.stringify(data));
};

export const removeFromLocalStorage = (name) => {
  localStorage.removeItem("name");
};

export const getFromLocalStorage = (name) => {
  const result = localStorage.getItem("name");
  const item = result ? JSON.parse(result) : null;
  // console.log(item);
  return item;
};
