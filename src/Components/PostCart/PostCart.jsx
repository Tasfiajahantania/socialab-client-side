import React, { useEffect, useState } from "react";

const PostCart = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then(res => res.json())
      .then(data => setPosts(data))

  }, []);


  console.log(posts);

  return (
    <React.Fragment>
      {
        posts.map(post => <div class="card">
          <div class="card-header border-0 pb-0">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-story me-2">
                  <a href="#!">
                    {" "}
                    <img
                      class="avatar-img rounded-circle"
                      src="https://social.webestica.com/assets/images/avatar/04.jpg"
                      alt=""
                    />{" "}
                  </a>
                </div>

                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">
                      {" "}
                      <a href="#!"> Lori Ferguson </a>
                    </h6>
                    <span class="nav-item small"> 2hr</span>
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="cardFeedAction">
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                      ferguson{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card-body">
            <p>
              {post.title}
            </p>

            <img
              class="card-img"
              src={post.image}
              alt="Post"
            />

            <ul class="nav nav-stack py-3 small">
              <li class="nav-item">
                <a class="nav-link active" href="#!">
                  {" "}
                  <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  {" "}
                  <i class="bi bi-chat-fill pe-1"></i>Comments (12)
                </a>
              </li>

              <li class="nav-item dropdown ms-sm-auto">
                <a
                  class="nav-link mb-0"
                  href="#"
                  id="cardShareAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                </a>

                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="cardShareAction">
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct
                      Message
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark{" "}
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-link fa-fw pe-2"></i>Copy link to post
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-share fa-fw pe-2"></i>Share post via …
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News
                      Feed
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="d-flex mb-3">
              <div class="avatar avatar-xs me-2">
                <a href="#!">
                  {" "}
                  <img
                    class="avatar-img rounded-circle"
                    src="https://social.webestica.com/assets/images/avatar/12.jpg"
                    alt=""
                  />{" "}
                </a>
              </div>

              <form class="w-100">
                <textarea
                  data-autoresize=""
                  class="form-control pe-4 bg-light"
                  rows="1"
                  placeholder="Add a comment..."></textarea>
              </form>
            </div>

            <ul class="comment-wrap list-unstyled">
              <li class="comment-item">
                <div class="d-flex position-relative">
                  <div class="avatar avatar-xs">
                    <a href="#!">
                      <img
                        class="avatar-img rounded-circle"
                        src="https://social.webestica.com/assets/images/avatar/12.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ms-2">
                    <div class="bg-light rounded-start-top-0 p-3 rounded">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-1">
                          {" "}
                          <a href="#!"> Frances Guerrero </a>
                        </h6>
                        <small class="ms-2">5hr</small>
                      </div>
                      <p class="small mb-0">
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection.
                      </p>
                    </div>

                    <ul class="nav nav-divider py-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          {" "}
                          Like (3)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!">
                          {" "}
                          Reply
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!">
                          {" "}
                          View 5 replies
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <ul class="comment-item-nested list-unstyled">
                  <li class="comment-item">
                    <div class="d-flex">
                      <div class="avatar avatar-xs">
                        <a href="#!">
                          <img
                            class="avatar-img rounded-circle"
                            src="https://social.webestica.com/assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="ms-2">
                        <div class="bg-light p-3 rounded">
                          <div class="d-flex justify-content-between">
                            <h6 class="mb-1">
                              {" "}
                              <a href="#!"> Lori Stevens </a>{" "}
                            </h6>
                            <small class="ms-2">2hr</small>
                          </div>
                          <p class="small mb-0">
                            See resolved goodness felicity shy civility domestic
                            had but Drawings offended yet answered Jennings
                            perceive.
                          </p>
                        </div>

                        <ul class="nav nav-divider py-2 small">
                          <li class="nav-item">
                            <a class="nav-link" href="#!">
                              {" "}
                              Like (5)
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#!">
                              {" "}
                              Reply
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="comment-item">
                    <div class="d-flex">
                      <div class="avatar avatar-story avatar-xs">
                        <a href="#!">
                          <img
                            class="avatar-img rounded-circle"
                            src="https://social.webestica.com/assets/images/avatar/07.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="ms-2">
                        <div class="bg-light p-3 rounded">
                          <div class="d-flex justify-content-between">
                            <h6 class="mb-1">
                              {" "}
                              <a href="#!"> Billy Vasquez </a>{" "}
                            </h6>
                            <small class="ms-2">15min</small>
                          </div>
                          <p class="small mb-0">
                            Wishing calling is warrant settled was lucky.
                          </p>
                        </div>
                        <ul class="nav nav-divider py-2 small">
                          <li class="nav-item">
                            <a class="nav-link" href="#!">
                              {" "}
                              Like
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#!">
                              {" "}
                              Reply
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="#!"
                  role="button"
                  class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                  data-bs-toggle="button"
                  aria-pressed="true">
                  <div class="spinner-dots me-2">
                    <span class="spinner-dot"></span>
                    <span class="spinner-dot"></span>
                    <span class="spinner-dot"></span>
                  </div>
                  Load more replies
                </a>
              </li>
              <li class="comment-item">
                <div class="d-flex">
                  <div class="avatar avatar-xs">
                    <a href="#!">
                      <img
                        class="avatar-img rounded-circle"
                        src="https://social.webestica.com/assets/images/avatar/05.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="ms-2">
                    <div class="bg-light p-3 rounded">
                      <div class="d-flex justify-content-between">
                        <h6 class="mb-1">
                          {" "}
                          <a href="#!"> Frances Guerrero </a>{" "}
                        </h6>
                        <small class="ms-2">4min</small>
                      </div>
                      <p class="small mb-0">
                        Removed demands expense account in outward tedious do.
                        Particular way thoroughly unaffected projection.
                      </p>
                    </div>
                    <ul class="nav nav-divider pt-2 small">
                      <li class="nav-item">
                        <a class="nav-link" href="#!">
                          {" "}
                          Like (1)
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!">
                          {" "}
                          Reply
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#!">
                          {" "}
                          View 6 replies
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-footer border-0 pt-0">
            <a
              href="#!"
              role="button"
              class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
              data-bs-toggle="button"
              aria-pressed="true">
              <div class="spinner-dots me-2">
                <span class="spinner-dot"></span>
                <span class="spinner-dot"></span>
                <span class="spinner-dot"></span>
              </div>
              Load more comments
            </a>
          </div>
        </div>)
      }
    </React.Fragment>
  );
};

export default PostCart;
