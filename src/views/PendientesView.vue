<template>
  <div class="pending">
    <h1>Tareas Pendientes</h1>
    <ul>
      <li id="li-pend" v-for="task in pendingTasks" :key="task.id">
        <i class="fas fa-clock" style="color: red;"  title="Pendiente"></i>
        {{ task.text }}
        
        <button id="bot-compl" @click="updateStatus(task.id, 'completada')">Completada</button>
        
      </li>
    </ul>
  </div>
</template>

<script>

import '@/assets/Pendientes.css';

export default {
  props: ['tasks'],
  computed: {
    pendingTasks() {
      return this.tasks.filter(task => task.status === 'pendiente');
    }
  },
  methods: {
    updateStatus(id, status) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.$emit('update-task-status', index, status);
      }
    },
    removeTask(id) {
      const index = this.tasks.findIndex(task => task.id === id);
      if (index !== -1) {
        this.$emit('remove-task', index);
      }
    }
  }
};
</script>

