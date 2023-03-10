const app = Vue.createApp({
    data() {
        return {
            showBooks: true, 
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }




        // changeTitle(title) {
        //   //  this.title = 'Words of Radiance'
        //   this.title = title
        // }
    }
})

app.mount('#app')