<template>
  <div >
    <Loading />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loading,
  },
  data: () => ({

  }),

};
</script>
