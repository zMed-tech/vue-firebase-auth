<template>
  <div id="register">
    <div class="title">
      <h2>Register</h2>
    </div>
    <div class="input" id="name">
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Name :"
        autocomplete="off"
      />
      <i class="fa fa-user" aria-hidden="true"></i>
    </div>
    <div class="input" id="email">
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Email :"
         autocomplete="off"
      />
      <i class="fa fa-envelope" aria-hidden="true"></i>
    </div>
    <div class="input" id="password">
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Password :"
         autocomplete="off"
      />
      <i class="fa fa-key" aria-hidden="true"></i>
    </div>
    <div class="button">
        <button @click="confirm">Confirm</button>
        <button @click="cancel">Cancel</button>
    </div>
    <div class="msgErr">
      <span> {{msgErr}} </span>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      msgErr: "",
    };
  },

  methods: {
      confirm() {
          this.msgErr = 'wait ...'
          firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((data) => {
              data.user
              .updateProfile({
                displayName: this.name
              })
              .then(() => {
                  this.msgErr = 'Success !'
              })
          })
          .catch((err) => {
              this.msgErr = err.message;
          })
      },

      cancel() {
          this.name = '';
          this.email = '';
          this.password = '';
          this.msgErr = '';
      }
  }
};
</script>

<style scoped>
#register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  border: 2px solid darkcyan;
  border-radius: 25px;
}

.title {
  text-align: center;
}

.title h2 {
  letter-spacing: 2px;
}

.input {
  border: 1px solid darkcyan;
  padding: 5px 15px;
  border-radius: 30px;
  margin: 20px 0;
}
input {
  border: none;
  outline: none;
  font-size: 18px;
  color: black;
}

i {
  color: darkcyan;
}

.msgErr {
    text-align: center;
     width: 300px;
}
.msgErr span {
    color: red;
    font-weight: bold;
}
.msgErr i {
    color: red;
}

.button {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
}
button {
    background-color: darkcyan;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    color: black;
    cursor: pointer;
    padding: 2px 10px;
    transition: all ease .3s;
    outline: none;
}
button:hover {
    color: red;
}
</style>