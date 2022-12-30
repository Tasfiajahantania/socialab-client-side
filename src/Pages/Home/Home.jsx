import React from "react";
import AddPost from "../../Components/AddPost/AddPost";
import PostCart from "../../Components/PostCart/PostCart";

const Home = () => {
  return (
    <React.Fragment>
      <div className="col-lg-3">

      </div>
      <div className="col-md-8 col-lg-6 vstack gap-4">
        <AddPost />
        <PostCart />
      </div>

      <div class="col-lg-3">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-12">
            <div class="card">
              <div class="card-header pb-0 border-0">
                <h5 class="card-title mb-0">Who to follow</h5>
              </div>
              <div class="card-body">
                <div class="hstack gap-2 mb-3">
                  <div class="avatar">
                    <a href="#!"><img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/04.jpg" alt="" /></a>
                  </div>
                  <div class="overflow-hidden">
                    <a class="h6 mb-0" href="#!">Judy Nguyen </a>
                    <p class="mb-0 small text-truncate">News anchor</p>
                  </div>
                  <a class="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i class="fa-solid fa-plus"> </i></a>
                </div>
                <div class="hstack gap-2 mb-3">
                  <div class="avatar avatar-story">
                    <a href="#!"><img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/05.jpg" alt="" /> </a>
                  </div>
                  <div class="overflow-hidden">
                    <a class="h6 mb-0" href="#!">Amanda Reed </a>
                    <p class="mb-0 small text-truncate">Web Developer</p>
                  </div>
                  <a class="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i class="fa-solid fa-plus"> </i></a>
                </div>
                <div class="hstack gap-2 mb-3">
                  <div class="avatar">
                    <a href="#"> <img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/11.jpg" alt="" /> </a>
                  </div>
                  <div class="overflow-hidden">
                    <a class="h6 mb-0" href="#!">Billy Vasquez </a>
                    <p class="mb-0 small text-truncate">News anchor</p>
                  </div>
                  <a class="btn btn-primary rounded-circle icon-md ms-auto" href="#"><i class="bi bi-person-check-fill"> </i></a>
                </div>
                <div class="hstack gap-2 mb-3">
                  <div class="avatar">
                    <a href="#">
                      <img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/01.jpg" alt="" />
                    </a>
                  </div>
                  <div class="overflow-hidden">
                    <a class="h6 mb-0" href="#!">Lori Ferguson </a>
                    <p class="mb-0 small text-truncate">Web Developer at Webestica</p>
                  </div>
                  <a class="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#">
                    <i class="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div class="hstack gap-2 mb-3">
                  <div class="avatar">
                    <a href="#">
                      <img class="avatar-img rounded-circle" src="https://social.webestica.com/assets/images/avatar/placeholder.jpg" alt="" />
                    </a>
                  </div>
                  <div class="overflow-hidden">
                    <a class="h6 mb-0" href="#!">Carolyn Ortiz </a>
                    <p class="mb-0 small text-truncate">News anchor</p>
                  </div>
                  <a class="btn btn-primary-soft rounded-circle icon-md ms-auto" href="#"><i class="fa-solid fa-plus"> </i></a>
                </div>
                <div class="d-grid mt-3">
                  <a class="btn btn-sm btn-primary-soft" href="#!">View more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
