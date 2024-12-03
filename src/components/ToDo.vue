<template>
    <div class="todo-app">
      <h1>Lista de Tareas</h1>
  
      <!-- Campo para agregar tareas -->
      <div class="add-task">
        <input
          type="text"
          v-model="newTask"
          placeholder="Escribe una tarea"
          @keyup.enter="addTask"
        />
        <button @click="addTask">Agregar</button>
      </div>
  
      <!-- Contenedores de tareas -->
      <div class="columns">
        <!-- Columna de "Tareas" -->
        <div class="column">
          <h2>Tareas</h2>
          <ul>
            <li v-for="(task, index) in tasks" :key="index">
              {{ task.text }}
              <button @click="moveToPending(index)">Pendiente</button>
              <button @click="removeTask(index)">Eliminar</button>
            </li>
          </ul>
        </div>
  
        <!-- Columna de "Pendientes" -->
        <div class="column">
          <h2>Pendientes</h2>
          <ul>
            <li v-for="(task, index) in pendingTasks" :key="index">
              {{ task.text }}
              <button @click="moveToCompleted(index)">Completada</button>
              <button @click="removeTask(index)">Eliminar</button>
            </li>
          </ul>
        </div>
  
        <!-- Columna de "Completadas" -->
        <div class="column">
          <h2>Completadas</h2>
          <ul>
            <li v-for="(task, index) in completedTasks" :key="index">
              {{ task.text }}
              <button @click="removeTask(index)">Eliminar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
        newTask: '',          // Campo de texto para nueva tarea
        tasks: [],            // Lista de tareas (tareas recién agregadas)
        pendingTasks: [],     // Tareas que están en pendientes
        completedTasks: []    // Tareas que están en completadas
      };
    },
    methods: {
      // Agregar una nueva tarea
      addTask() {
        if (this.newTask.trim() === '') return;  // No agregar si está vacío
        const newTask = { text: this.newTask };   // Crear un nuevo objeto tarea
        this.tasks.push(newTask);                 // Añadirla a tareas generales
        this.newTask = '';                        // Limpiar el campo de texto
      },
  
      // Mover tarea de "Tareas" a "Pendientes"
      moveToPending(index) {
        const task = this.tasks.splice(index, 1)[0]; // Eliminar de tareas
        this.pendingTasks.push(task);                // Agregar a pendientes
      },
  
      // Mover tarea de "Pendientes" a "Completadas"
      moveToCompleted(index) {
        const task = this.pendingTasks.splice(index, 1)[0]; // Eliminar de pendientes
        this.completedTasks.push(task);                     // Agregar a completadas
      },
  
  
      // Eliminar tarea de cualquiera de las columnas
      removeTask(index) {
        // Eliminar de tareas generales
        let task = this.tasks.splice(index, 1)[0];
        if (!task) {
          // Si no se encuentra en tareas, buscar en pendientes
          task = this.pendingTasks.splice(index, 1)[0];
        }
        if (!task) {
          // Si no se encuentra en pendientes, buscar en completadas
          task = this.completedTasks.splice(index, 1)[0];
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .todo-app {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .add-task input {
    width: 80%;
    padding: 10px;
    margin-right: 10px;
    border-radius: 4px;
  }
  
  .add-task button {
    padding: 10px 20px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-task button:hover {
    background-color: #4cae4c;
  }
  
  .columns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .column {
    width: 30%;
  }
  
  .column h2 {
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  button {
    padding: 5px 10px;
    background-color: #d9534f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #c9302c;
  }
  </style>