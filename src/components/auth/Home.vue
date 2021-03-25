<template>
  <div id="home">
     <div class="content">
       <transition name="fade" mode="out-in">
         <component :is="comp"/>
       </transition>
      <div class="change">
        <button @click="login">Login</button>
        <button @click="register">Register</button>
      </div>
     </div>
  </div>
</template>

<script>
import Register from './Register.vue'
import Login from './Login.vue'

export default {

  components: {Register, Login},

  data() {
    return {
      comp: Login
    }
  },

  methods: {
    login() {
      this.comp = Login;
    },

    register() {
      this.comp = Register;
    }
  }

}
</script>

<style scoped>

#home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  

}

.content {
  display: flex;
  flex-direction: column;
  padding: 25px;

}

.change {
  display: flex;
  justify-content: space-around;
  margin: 5px 0;
}

button {
  color: darkcyan;
  font-size: 16px;
  border: none;
  transition: all ease .3s;
  background-color: white;
  cursor: pointer;
  outline: none;
  font-weight: bold;

}

button:hover {
  color: red;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

</style>