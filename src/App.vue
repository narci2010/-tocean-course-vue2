<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/tran">Tran</router-link> |
      <router-link to="/tran2">Tran2</router-link> |
      <router-link to="/tran3">Tran3</router-link> |
      <router-link to="/tran5">Tran5</router-link> |
      <router-link to="/tran6">Tran6</router-link> |
      <router-link to="/tran7">Tran7</router-link> |
      <router-link to="/tran8">Tran8</router-link> |
      <router-link to="/tran9">Tran9</router-link> |
      <router-link to="/tran10">Tran10</router-link> |
      <router-link to="/tran11">Tran11</router-link> |
      <router-link to="/tran12">Tran12</router-link> |
      <router-link to="/tran13">Tran13</router-link> |
      <router-link to="/tran15">Tran15</router-link> |
      <router-link to="/tran16">Tran16</router-link> |
      <router-link to="/tran17">Tran17</router-link> |
      <router-link to="/tran18">Tran18</router-link> |
      <router-link to="/tran19">Tran19</router-link> |
      <router-link to="/d1">D1</router-link> |
      <router-link to="/d2">D2</router-link> |
      <router-link to="/r1">R1</router-link> |
      <router-link to="/r2">R2</router-link> |
      <router-link to="/r3">R3</router-link> |
      <router-link to="/r5">R5</router-link> |
      <router-link to="/r6">R6</router-link> |
      <router-link to="/todo">TODO</router-link> |
      <router-link to="/ts">TS</router-link> |
      <router-link to="/r8">R8</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
