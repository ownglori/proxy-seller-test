import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {Loading, Users} from "@/components";
import {fetchError, filterByUserName, sortAscByUserId, sortAscByUserName, sortDescByUserName} from "@/helpers";


export const Home = ({fetchInitialData, data}) => {
  const [users, setUsers] = useState(__isClient__ ? [] : data);
  const [search, setSearch] = useState({status: false, users: []});
  const [loading, setLoading] = useState(!users);

  const fetchSuccess = data => {
    setUsers(data);
    setLoading(false);
  };

  const fetchData = () => {
    fetchInitialData()
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  };

  const sortUser = (event) => {
    switch (event.target.value) {
      case "default":
        setUsers(sortAscByUserId(users));
        setSearch({status: search.status, users: sortAscByUserId(search.users)});
        break;
      case "asc":
        setUsers(sortAscByUserName(users));
        setSearch({status: search.status, users: sortAscByUserName(search.users)});
        break;
      case "desc":
        setUsers(sortDescByUserName(users));
        setSearch({status: search.status, users: sortDescByUserName(search.users)});
        break;
      default:
        setUsers(sortAscByUserId(users));
        setSearch({status: search.status, users: sortAscByUserId(search.users)});
        break;
    }
  };

  const searchUser = (event) => {
    if (event.target.value.length < 1) {
      return setSearch({status: false, users: []});
    }

    return setSearch({status: true, users: filterByUserName(users, event.target.value)});
  };

  useEffect(fetchData, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <Helmet>
        <title>Home users title</title>
        <meta name="description" content="Home users description"/>
      </Helmet>
      <div className="py-3">
        <div className="row g-3 mb-3">
          <div className="col-12 col-sm-6 col-md-8 col-lg-6">
            <input className="form-control" type="text" placeholder="Search user by username" onChange={searchUser}/>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 offset-lg-3">
            <select className="form-select" onChange={sortUser}>
              <option value="default">Default sort</option>
              <option value="asc">Asc sort</option>
              <option value="desc">Desc sort</option>
            </select>
          </div>
        </div>
        <Users users={search.status ? search.users : users}/>
      </div>
    </>
  );
};
