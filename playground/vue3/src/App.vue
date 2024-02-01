<script lang="ts">
import Hello from './Hello.vue';
import Welcome from './Welcome';

export default {
  name: 'App',
  components: {
    Hello,
    Welcome,
  },
};
</script>

<template>
  <main id="app">
    <Hello />
    <Welcome />

    <div>
      <a href="https://rsbuild.dev/" target="_blank" rel="noreferrer">
        <img
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/rjhwzy/ljhwZthlaukjlkulzlp/rsbuild/navbar-logo-dark-10164.png"
          class="logo"
          alt="Rsbuild Logo"
        />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"
          class="logo vuejs"
          alt="Vuejs Logo"
        />
      </a>
    </div>
    <h1>Rsbuild + Vue</h1>

    <div class="card">
      <Counter />
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vuejs</a>
    </p>

    <p class="read-the-docs">
      Click on the Rsbuild and vuejs logos to learn more
    </p>
  </main>
</template>

<style>
#app {
  margin: 0 auto;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vuejs:hover {
  filter: drop-shadow(0 0 2em #00ff00aa);
}
.read-the-docs {
  color: #888;
}
</style>
