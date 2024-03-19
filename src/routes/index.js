import {Album, Albums, Home, Post, Posts} from "@/pages";
import {getAlbumData, getAlbumsByUserId, getPostData, getPostsByUserId, getUsers} from "@/api";


export const routes = [
  {
    path: "/",
    component: Home,
    fetchInitialData: () => getUsers()
  },
  {
    path: "/posts/:userId",
    component: Posts,
    fetchInitialData: (path) => getPostsByUserId(path.split("/").pop())
  },
  {
    path: "/post/:postId",
    component: Post,
    fetchInitialData: (path) => getPostData(path.split("/").pop())
  },
  {
    path: "/albums/:userId",
    component: Albums,
    fetchInitialData: (path) => getAlbumsByUserId(path.split("/").pop())
  },
  {
    path: "/album/:albumId",
    component: Album,
    fetchInitialData: (path) => getAlbumData(path.split("/").pop())
  }
];
