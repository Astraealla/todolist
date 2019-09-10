let app = new Vue ({
    el: '#app',
    data: {
        taskes: [
            // {
            // done: 'done',
            // name: 'name',
            // del: 'delete'
            // }
            {text: "Exemple"
        }
        ],


    },

    methods: {
        newTask: function()
        {
            this.taskes.push({text:this.userTask});
        }
    },
})