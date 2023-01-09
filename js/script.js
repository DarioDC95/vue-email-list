const { createApp } = Vue;

createApp({
    data() {
        return {
            message: [],
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                // handle success
                console.log(`${i + 1} = ${response.data.response}`);
                this.message.push(response.data.response)
            })
        };
    },
}).mount('#app')