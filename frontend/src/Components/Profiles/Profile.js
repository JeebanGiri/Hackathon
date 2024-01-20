// Profile.js

import React from 'react';
import './Profile.css'; // Make sure to import your CSS file

const Profile = () => {
  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              {/* ... Your links */}
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              {/* ... Your tab content */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Profile;
