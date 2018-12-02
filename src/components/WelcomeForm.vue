<template>
    <div class="welcome container">
        <div class="card">
            <div class="card-content center-align">
                <h2 class="teal-text welcome-header">Welcome</h2>
                <form @submit.prevent="enterChat">
                    <label for="name">Enter your name:</label>
                    <input type="text" name="name" v-model="name">
                    <p v-if="feedback" class="red-text">{{ feedback }}</p>
                    <button class="btn teal enterChat">Enter Chat</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WelcomeForm',
        data() {
            return {
                name: null,
                feedback: null
            }
        },
        methods: {
            enterChat() {
                if ( this.name ) {
                    this.$router.push({name: 'Chat', params: {name: this.name}})
                } else {
                    this.feedback = `You must enter a name to join`;
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    .welcome {
        max-width: 400px;
        margin-top: 100px;

        .welcome-header {
            font-size: 3em;
        }

        .enterChat {
            margin: 30px;
        }
    }

</style>
