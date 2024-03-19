import {compactAlbumData, compactPostData, fetchError, formatComments} from "@/helpers";


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

export const getPostData = (postId) => {
  const post = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .catch(error => fetchError(error));

  const comments = fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(data => formatComments(data))
    .catch(error => fetchError(error));

  return Promise.all([post, comments])
    .then(response => compactPostData(response))
    .catch(error => fetchError(error));
}

export const getAlbumsByUserId = (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    .then(response => response.json())
    .catch(error => fetchError(error));
}

export const getAlbumData = (albumId) => {
  const album = fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    .then(response => response.json())
    .catch(error => fetchError(error));

  const photos = fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
    .then(response => response.json())
    .catch(error => fetchError(error));

  return Promise.all([album, photos])
    .then(response => compactAlbumData(response))
    .catch(error => fetchError(error));
}
