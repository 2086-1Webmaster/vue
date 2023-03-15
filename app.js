const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true, 
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg' },
                { title: 'the final empire', author: 'juju maholms', img: 'assets/3.jpg' },
            ]

        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }




        // changeTitle(title) {
        //   //  this.title = 'Words of Radiance'
        //   this.title = title
        // }
    }
})

app.mount('#app')