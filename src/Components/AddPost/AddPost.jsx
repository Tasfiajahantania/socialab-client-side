import React from "react";
import AddNewPost from "./AddNewPost";

const AddPost = () => {
  return (
    <div>
      <div class="card card-body">
        <div class="d-flex">
          <div class="avatar avatar-xs me-2">
            <a href="#">
              {" "}
              <img
                class="avatar-img rounded-circle"
                src="https://social.webestica.com/assets/images/avatar/03.jpg"
                alt=""
              />{" "}
            </a>
          </div>
          <div class="w-100">
            <AddNewPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
