import {fetchError} from "@/helpers";


export const getUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .catch(error => fetchError(error));
};

export const getPostsByUserId = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => response.json())
    .catch(error => fetchError(error));
}
