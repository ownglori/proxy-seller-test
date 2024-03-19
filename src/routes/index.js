import {Home, Post, Posts} from "@/pages";
import {getPostData, getPostsByUserId, getUsers} from "@/api";


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
  }
];
