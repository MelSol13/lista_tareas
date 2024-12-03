
<template>
  <div class="list-cont">
    <h1>Lista de Tareas</h1>
    <div class="add-task">
      <input v-model="newTask" @keyup.enter="submitTask" placeholder="Nueva tarea" />
      <button @click="submitTask">Agregar tarea</button>
    </div>

    
    <ul>
      <li id="li-Inic" v-for="(task, index) in tasks" :key="task.id">
        <i class="fas fa-list-check" style="color:blueviolet;" title="lista"></i>
        {{ task.text }} ( {{ task.status }} )
        <button id="bot-pend" @click="updateStatus(index, 'pendiente')">Pendiente</button>
        <button id="bot-compl" @click="updateStatus(index, 'completada')">Completada</button>
        <button id="bot-elim" @click="remove(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>

import '@/assets/Inicio.css';

export default {
  props: ['tasks'],
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    submitTask() {
      if (this.newTask.trim()) {
        this.$emit('add-task', this.newTask);
        this.newTask = '';
      }
    },
    updateStatus(index, status) {
      this.$emit('update-task-status', index, status);
    },
    remove(index) {
      this.$emit('remove-task', index);
    }
  }
};
</script>
