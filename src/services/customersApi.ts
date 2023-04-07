export const getCustomers = () => {
    return fetch("https://dummyjson.com/users").then((res) => res.json());
  };