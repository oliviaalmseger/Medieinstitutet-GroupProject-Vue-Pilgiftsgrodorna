<template>
<div class="contact">
    <form>
      <div>
        <label for="firstName">Förnamn</label>
        <input type="text" id="firstName" v-model="form.firstName" required/>
      </div>

      <div>
        <label for="lastName">Efternamn</label>
        <input type="text" id="lastName" v-model="form.lastName" required/>
      </div>

      <div>
        <label for="email">E-post</label>
        <input type="email" id="email" v-model="form.email" required/>
      </div>

      <div>
        <label for="message">Meddelande</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <button type="submit">Skicka</button>
    </form>
</div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});
</script>