<template>
  <nav>
    <h1>Vuex Auth</h1>
    <template v-if="authIsReady">
      <!-- for all users -->
      <div>
        <router-link to="/">Home</router-link>
      </div>

      <!-- for logged in users -->
      <div v-if="user">
        <span>Logged in as {{ user.email }}</span>
        <button @click="handleLogout">Logout</button>
      </div>

      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/signin">Sign in</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

const store = useStore()

const handleLogout = () => {
  store.dispatch('logout')
}

const user = computed(() => store.state.user)
const authIsReady = computed(() => store.state.authIsReady)
</script>
