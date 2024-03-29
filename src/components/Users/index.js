import React from "react";
import {UserComponent} from "@/components";


export const UsersComponent = ({users}) => {
  if (!users || users.length === 0) {
    return (
      <div className="row g-3">
        <div className="col-12">
          <h5>Users not found</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {users.map(user => (
        <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UserComponent user={user}/>
        </div>
      ))}
    </div>
  );
};
