<template>
  <div>
    <nav>
      <router-link to="/">Todas</router-link> |
      <router-link to="/pendientes">Pendientes</router-link> |
      <router-link to="/completadas">Completadas</router-link>
    </nav>

    <router-view
      :tasks="tasks"
      @add-task="addTask"
      @update-task-status="updateTaskStatus"
      @remove-task="removeTask"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: []  
    };
  },
  methods: {
    addTask(newTask) {
      const newTaskItem = {
        id: Date.now(), 
        text: newTask,
        status: 'tareas'
      };
      this.tasks.push(newTaskItem);
    },
    updateTaskStatus(index, status) {
      this.tasks[index].status = status;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #ecf0f3;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}
nav a {
  text-decoration: none;
  color: #007bff;
  margin: 0 10px;
}
nav a:hover {
  text-decoration: underline;
  color: #0056b3;
}
</style>