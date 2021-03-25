import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
import router from './router'

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyD8uBNqn6wpxXSOalCA-bjT8iL_A-NWXwI",
    authDomain: "vue-auth-100e9.firebaseapp.com",
    projectId: "vue-auth-100e9",
    storageBucket: "vue-auth-100e9.appspot.com",
    messagingSenderId: "226996036760",
    appId: "1:226996036760:web:1cf5bc4018ca89581fdced"
};

firebase.initializeApp(configOptions);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
