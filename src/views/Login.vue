<template>
  <div class="contact-page">
    <!-- <div class="bg-contact"></div> -->
    <div class="container animate__animated animate__fadeIn">
      <div class="container-fluid contact parent">
        <div class="row">
          <!-- image -->
          <div class="col-lg-7 text-center text-lg-start">
            <!-- <h1 class="title">Log In and Register</h1>
            <h3 class="about">
              By logging in<br />
              you can see more <br />features of the site
            </h3> -->
            <img class="img-login" src="@/assets/files/img/iullustratio-login.svg" alt="login image" />
          </div>
          <!-- login -->
          <div class="col-lg-5 msg">
            <div class="card text-left">
              <div class="card-body">
                <!-- login or register tabs -->
                <ul
                  class="nav nav-tabs nav-tabs-login"
                  id="myTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Login
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Create Account
                    </button>
                  </li>
                </ul>
                <!-- content tabs -->
                <div class="tab-content" id="myTabContent">
                  <!-- Login content -->
                  <Login />
                  <!-- Register content -->
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  data: () => ({}),
  components: {
    Login,
    Register,
  },

};
</script>