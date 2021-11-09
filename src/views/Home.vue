<template>
  <div class="home p-5">
    <h1 class="mb-5 p-5">Home Page</h1>
    <form class="row g-3" @submit.prevent="submitForm">
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">name</label>
        <input
          type="text"
          class="form-control"
          placeholder="name"
          v-model="student.name"
        />
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">course</label>
        <input
          type="text"
          class="form-control"
          placeholder="course"
          v-model="student.course"
        />
      </div>
      <div class="col-auto">
        <label for="inputPassword2" class="visually-hidden">rating</label>
        <input
          type="number"
          class="form-control"
          placeholder="rating"
          v-model="student.rating"
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
      </div>
    </form>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="student in students"
          :key="student.id"
          @dblclick="$data.student = student"
        >
          <th scope="col" v-text="student.id"></th>
          <th scope="col" v-text="student.name"></th>
          <th scope="col" v-text="student.course"></th>
          <th scope="col" v-text="student.rating"></th>
          <th scope="col">
            <button
              class="btn btn-danger text-warning"
              @click="removeStudent(student)"
            >
              delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// @ is an alias to /src
let BASE_URL = "http://127.0.0.1:8000/api";
let API_STUDENTS = "/students/";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      students: [],
      student: {},
    };
  },
  async created() {
    await this.getStudents();
  },
  methods: {
    async submitForm() {
      if (this.student.id === undefined) {
        await this.createStudent();
      } else {
        await this.updateStudent();
      }
    },
    async getStudents() {
      const response = await fetch(`${BASE_URL}${API_STUDENTS}`);
      this.students = await response.json();
    },
    async createStudent() {
      await this.getStudents();
      await fetch(`${BASE_URL}${API_STUDENTS}`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(this.student),
      });
      await this.getStudents();
      this.student = {};
    },
    async updateStudent() {
      await this.getStudents();
      await fetch(`${BASE_URL}${API_STUDENTS}${this.student.id}/`, {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(this.student),
      });
      await this.getStudents();
      this.student = {};
    },
    async removeStudent(student) {
      await this.getStudents();
      await fetch(`${BASE_URL}${API_STUDENTS}${student.id}/`, {
        headers: { "Content-Type": "application/json" },
        method: "delete",
        body: JSON.stringify(this.student),
      });
      await this.getStudents();
    },
  },
};
</script>