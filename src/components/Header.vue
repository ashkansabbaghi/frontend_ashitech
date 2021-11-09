<template>
  <!-- header -->
  <header class="header"><!--sticky-top-->
    <div class="container animate__animated animate__fadeIn">
      <nav class="navbar  navbar-expand-md">
        <div class="container ">
          <!-- logo -->
          <router-link to="/Home"
            ><a class="navbar-brand" href="#">
              <img
                class="img-logo"
                src="@/assets/files/img/logo.svg"
                alt="logo"
                loading="lazy"
              /> </a
          ></router-link>
          <!-- btn responsive menu -->
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="isActiveMenuMob = !isActiveMenuMob"
          >
            <i class="fa fa-bars"></i>
          </button>
          <div
            class="collapse navbar-collapse"
            :class="{ active: isActiveMenuMob }"
            id="collapsibleNavId"
          >
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/"
                  ><a class="nav-link" href="#">About</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/product"
                  ><a class="nav-link" href="#">Things you need</a></router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/blogs"
                  ><a class="nav-link" href="#">Blogs</a></router-link
                >
              </li>
              <li class="nav-item" v-if="!token">
                <router-link to="/login"
                  ><a class="nav-link" href="#">logIn</a></router-link
                >
              </li>
              <li class="nav-item" v-if="token">
                <router-link to="/dashboard"
                  ><a class="nav-link" href="#">Dashboard</a></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!-- header -->
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    select: undefined,
    isActiveMenuMob: false,
    value_scroll : 0,
    token: localStorage.getItem("token"),
  }),
  methods:{

  }
};
</script>
