<template>
  <div class="completed">
    <h1>Tareas Completadas</h1>
    <ul>
      <li id="li-compl" v-for="task in completedTasks" :key="task.id">
        <i class="fas fa-check-circle" style="color: green;" title="Completada"></i>
        {{ task.text }}
      </li>
    </ul>
  </div>
</template>

<script>

import '@/assets/Completadas.css';

export default {
  props: ['tasks'],
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.status === 'completada');
    }
  }
};
</script>
