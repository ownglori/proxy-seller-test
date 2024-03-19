export const sortAscByUserName = (users) => {
  return [...users].sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0));
};

export const sortDescByUserName = (users) => {
  return [...users].sort((a, b) => (a.username < b.username) ? 1 : ((b.username < a.username) ? -1 : 0));
};

export const sortAscByUserId = (users) => {
  return [...users].sort((a, b) => a.id - b.id);
};

export const filterByUserName = (users, filter) => {
  return [...users].filter(a => a.username.toLowerCase().startsWith(filter.toLowerCase()));
};

export const compactPostData = (data) => {
  const [post, comments] = data;

  return {...post, body: post.body.replace(/\n/g, "<br/>"), comments: comments};
};

