"use strict";

const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            mailList: []
        }
    },
    methods: {
        getMailApi(){
            for(let i=0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    console.log(resp.data.response);
                    this.mailList.push(resp.data.response);
                })
            };
        }
    },
    computed: {

    },
    mounted(){
        
    }
});

app.mount('#app')