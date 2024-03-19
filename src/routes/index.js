import {Home, Posts} from "@/pages";
import {getPostsByUserId, getUsers} from "@/api";


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
  }
];
