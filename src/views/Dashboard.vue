<template>
  <div class="dashboard">
    <!-- <div class="bg-contact"></div> -->
    <div class="container animate__animated animate__fadeIn">
      <div class="row parent">
        <div class="col-12">
          <div class="col-lg-12 text-center">
            <!-- image -->
            <a
              class="dashboard-profile"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modalProfile"
            >
              <img
                class="dashboard-img"
                :src="user.profile.image"
                alt="profile-img"
              />
              <!-- src="@/assets/files/img/profile-1.png" -->
              <!-- <a href="#" class="add-profile">
                <i class="fa fa-plus-circle"></i>
              </a> -->
            </a>
          </div>
        </div>
        <div class="col-12 pt-5">
          <div class="col-12 text-center">
            <!-- info -->
            <div class="dashboard-info">
              <h4 class="username" v-text="user.username"></h4>
              <h5 class="email" v-text="user.email"></h5>
              <h5 class="mobile" v-text="user.profile.mobile"></h5>
              <p class="bio" v-text="user.profile.bio"></p>
              <button
                class="btn edit-profile"
                @click="showModalUpdateProfile"
                data-bs-toggle="modal"
                data-bs-target="#modalEditProfile"
              >
                edit profile
              </button>

            </div>
          </div>
        </div>
        <!-- tabs -->
        <div class="col-12">
          <div class="dashboard-tabs">
            <!-- head tabs -->
            <ul class="nav nav-pills" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="create-post-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#create-post"
                  type="button"
                  role="tab"
                  aria-controls="create-post"
                  aria-selected="false"
                >
                  <span
                    ><img
                      class="ic-item"
                      src="@/assets/files/img/ic-plus.svg"
                      alt="logout"
                  /></span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="analytic-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#analytic"
                  type="button"
                  role="tab"
                  aria-controls="analytic"
                  aria-selected="false"
                >
                  <span
                    ><img
                      class="ic-item"
                      src="@/assets/files/img/ic-analytic.svg"
                      alt="logout"
                  /></span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="posts-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#posts"
                  type="button"
                  role="tab"
                  aria-controls="posts"
                  aria-selected="true"
                >
                  <span
                    ><img
                      class="ic-item"
                      src="@/assets/files/img/ic-post.svg"
                      alt="logout"
                  /></span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="password-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#password"
                  type="button"
                  role="tab"
                  aria-controls="password"
                  aria-selected="false"
                >
                  <span
                    ><img
                      class="ic-item"
                      src="@/assets/files/img/ic-password.svg"
                      alt="logout"
                  /></span>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="logout-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#logout"
                  type="button"
                  role="tab"
                  aria-controls="logout"
                  aria-selected="false"
                >
                  <span
                    ><img
                      class="ic-item"
                      src="@/assets/files/img/ic-logout.svg"
                      alt="logout"
                  /></span>
                </button>
              </li>
            </ul>
            <!-- content tabs -->
            <div class="tab-content" id="pills-tabContent">
              <!-- create post -->
              <div
                class="tab-pane fade"
                id="create-post"
                role="tabpanel"
                aria-labelledby="create-post-tab"
              >
                <div class="container tab-info input">
                  <textarea
                    class="input-custom"
                    placeholder="What’s your idea ?"
                    name="Text1"
                    cols="40"
                    rows="5"
                  ></textarea>
                  <input
                    class="input-custom"
                    type="text"
                    name="tags"
                    placeholder="Enter Tags"
                    pattern=""
                    size="30"
                    required
                  />
                  <input
                    class="input-custom"
                    type="text"
                    name="tag-p"
                    placeholder="Tag people"
                    pattern=""
                    size="30"
                  />
                  <input
                    class="input-custom"
                    type="text"
                    name="loc"
                    placeholder="Location"
                    pattern=""
                    size="30"
                  />
                  <div class="container">
                    <div class="row justify-content-between">
                      <button class="col-md-3 btn mt-3">keep</button>
                      <button class="col-md-8 btn btn-send mt-3">send</button>
                    </div>
                  </div>
                </div>
                <!-- coming soon -->
                <div class="comingSoon">
                  <img
                    class="obj"
                    src="@/assets/files/img/error-illus.svg"
                    alt="error"
                  />
                </div>
              </div>
              <!-- analytic -->
              <div
                class="tab-pane fade"
                id="analytic"
                role="tabpanel"
                aria-labelledby="analytic-tab"
              >
                <div class="container tab-info analytics">
                  <!-- numbers -->
                  <div class="numbers">
                    <div class="item">
                      <span class="num">82</span>
                      <span>posts</span>
                    </div>
                  </div>
                  <!-- chart -->
                  <h6 class="text-center mt-5">see your activity</h6>
                  <Chart class="mt-4" />
                </div>
              </div>
              <!-- posts -->
              <div
                class="tab-pane fade show active"
                id="posts"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <div class="container tab-info">
                  <div class="col-12 post mb-5">
                    <div class="header-post color-primary">
                      <img
                        class="post-img"
                        src="@/assets/files/img/profile-1.png"
                        alt=""
                      />
                      <span class="p-r f-sans-bold">ashkan sabbaghi</span>
                      <span class="p-r f-sans-light f-size-12">4D</span>
                      <span class="p-r"
                        ><img src="@/assets/files/img/ic-eye-post.svg" alt=""
                      /></span>
                      <span class="f-sans-light f-size-12">51</span>

                      <a
                        href="#"
                        class="more ms-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#modalMore"
                        ><img src="@/assets/files/img/ic-more.svg" alt=""
                      /></a>
                    </div>
                    <div class="content-post">
                      <p>
                        You can talk about all the ideas you have in this
                        section and share it with everyone on the site. <br />
                        Thanks
                      </p>
                    </div>

                    <div class="footer-post">
                      <img src="@/assets/files/img/ic-save.svg" alt="ic-save" />
                      <div class="number-save">
                        <div class="text-center">15</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 post mb-5">
                    <div class="header-post color-primary">
                      <img
                        class="post-img"
                        src="@/assets/files/img/profile-1.png"
                        alt=""
                      />
                      <span class="p-r f-sans-bold">ashkan sabbaghi</span>
                      <span class="p-r f-sans-light f-size-12">4D</span>
                      <span class="p-r"
                        ><img src="@/assets/files/img/ic-eye-post.svg" alt=""
                      /></span>
                      <span class="f-sans-light f-size-12">51</span>

                      <a
                        href="#"
                        class="more ms-auto"
                        data-bs-toggle="modal"
                        data-bs-target="#modalMore"
                        ><img src="@/assets/files/img/ic-more.svg" alt=""
                      /></a>
                    </div>
                    <div class="content-post">
                      <p>
                        You can talk about all the ideas you have in this
                        section and share it with everyone on the site. <br />
                        Thanks
                      </p>
                    </div>

                    <div class="footer-post">
                      <img src="@/assets/files/img/ic-save.svg" alt="ic-save" />
                      <div class="number-save">
                        <div class="text-center">15</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- change password -->
              <div
                class="tab-pane fade"
                id="password"
                role="tabpanel"
                aria-labelledby="password-tab"
              >
                <form action="#">
                  <div class="container tab-info tab-sm input">
                    <input
                      class="input-custom"
                      type="password"
                      name="password"
                      placeholder="Enter old password"
                      size="30"
                      autocomplete="off"
                      required
                    />
                    <input
                      class="input-custom"
                      type="password"
                      name="password-new"
                      placeholder="Enter new password"
                      size="30"
                      autocomplete="off"
                      required
                    />
                    <input
                      type="submit"
                      class="btn btn-send w-100 mt-3"
                      value="change password"
                    />
                  </div>
                </form>
              </div>
              <!-- logOut -->
              <div
                class="tab-pane fade"
                id="logout"
                role="tabpanel"
                aria-labelledby="logout-tab"
              >
                <div class="container tab-info text-center">
                  <a class="link-exit" href="#" @click.prevent="LogoutSubmit"
                    >Goodbye {{ user.username }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!----------------------- Modal --------------------------->

  <!-- open more -->
  <div
    class="modal modal-list fade"
    id="modalMore"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="container modal-body">
          <div class="row">
            <a href="#" class="link col-12">Edit</a>
            <a href="#" class="link delete col-12">Delete</a>
            <a href="#" class="link col-12">Copy Link</a>
            <a href="#" class="link col-12">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- open profile -->
  <div
    class="modal modal-list fade"
    id="modalProfile"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="container modal-body">
          <div class="row">
            <a href="#" class="link col-12">Upload image</a>
            <a href="#" class="link delete col-12">Delete</a>
            <a href="#" class="link col-12">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- open btn edit profile -->
  <div
    class="modal modal-edit-profile fade"
    id="modalEditProfile"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="container">
          <div class="modal-header justify-content-center">
            <h5 class="modal-title">Edit Profile</h5>
          </div>
           <form @submit.prevent="UpdateProfile">
          <div class="modal-body">

              <div class="mb-3">
                <label for="e-username" class="f-size-12 mt-2">Username:</label>
                <input
                  type="text"
                  class="form-control input-custom"
                  id="e-username"
                  v-model="user.username"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="e-email" class="f-size-12 mt-2">Email:</label>
                <input
                  type="text"
                  class="form-control input-custom"
                  id="e-email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  v-model="user.email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="e-mobile" class="f-size-12 mt-2">Mobile:</label>
                <input
                  type="number"
                  class="form-control input-custom"
                  id="e-mobile"
                  v-model="user.profile.mobile"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message-text" class="f-size-12 mt-2">Bio:</label>
                <textarea
                  class="form-control input-custom"
                  v-model="user.profile.bio"
                ></textarea>
              </div>
          </div>
          <div class="modal-footer justify-content-center">
             <button type="submit" class="btn btn-update w-100">UPDATE</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import Chart from "@/components/Chart.vue";
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "chart",
  data: () => ({
    token: localStorage.getItem("token"),
  }),

  components: {
    Chart,
  },
  computed: {
    ...mapState({ status: "status", user: "user", logout: "logout" }),

    // currentUser: {
    //   get() {
    //     return this.$store.state.user;
    //   },
    // },
  },
  async created() {
    axios.defaults.headers.common["Authorization"] = `token ${this.token}`;
    this.$store.dispatch("getUser");
  },
  methods: {
    async LogoutSubmit() {
      this.$store.dispatch("logOutUser", this.token);
    },
    async UpdateProfile() {
      // console.log("updateProfile",this.user,this.token);
      this.$store.dispatch("updateProfile", this.user);
    },
  },
};
</script>
