<script setup>
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

const isFormValid = computed(
    () => firstName.value && lastName.value && isValidEmail() && message.value
);

const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid.value) {
        alert('Formuläret har skickats!');
        resetForm();
    }
};

const resetForm = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
};
</script>

<template>
    <div class="contact-card">
        <form @submit="handleSubmit">
            <fieldset>
                <div class="contact-field">
                    <label for="firstName">Förnamn</label>
                    <input
                        type="text"
                        id="firstName"
                        v-model="firstName"
                        autocomplete="given-name"
                        required
                        placeholder="Skriv ditt förnamn här"
                    />
                </div>

                <div class="contact-field">
                    <label for="lastName">Efternamn</label>
                    <input
                        type="text"
                        id="lastName"
                        v-model="lastName"
                        autocomplete="family-name"
                        required
                        placeholder="Skriv ditt efternamn här"
                    />
                </div>

                <div class="contact-field">
                    <label for="email">E-post</label>
                    <input
                        type="email"
                        id="email"
                        v-model="email"
                        autocomplete="email"
                        required
                        :class="{ error: !isValidEmail() && email }"
                        placeholder="Skriv din e-post här"
                    />
                    <p v-if="!isValidEmail() && email" class="error-message">
                        Ange en giltig e-postadress.
                    </p>
                </div>

                <div class="contact-field">
                    <label for="message">Meddelande</label>
                    <textarea
                        id="message"
                        v-model="message"
                        required
                        placeholder="Skriv ditt meddelande här"
                    ></textarea>
                </div>

                <button type="submit" :disabled="!isFormValid">Skicka</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped lang="scss">
.contact-card {
    margin: auto;
    font-family: $p-font;
    color: $text-color;
    font-size: 1.125rem;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1.5rem;
    margin-top: 40px;
    margin-bottom: 80px;
}

fieldset {
    border: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-field {
    width: 100%;
    max-width: 350px;
    margin-bottom: 40px;
}

input,
textarea,
button {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 8px;
    font-family: $p-font;
}

input,
textarea {
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.8);
    color: #616161;
}

textarea {
    resize: vertical;
    height: 80px;
}

button {
    margin-top: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    max-width: 98px;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.error {
    border-color: $detail-color;
}

.error-message {
    color: $detail-color;
    font-size: $p-fs-mobile;
}

@media (min-width: 834px) {
    .contact-card {
        margin-top: 120px;
        margin-bottom: 287px;
    }
}

@media (min-width: 1280px) {
    .contact-card {
        width: 825px;
        margin-top: 120px;
        margin-bottom: 120px;
    }
}

</style>
