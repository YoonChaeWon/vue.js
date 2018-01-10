// Vue.component('todo-item', {
//     template: '\
//         <tr>\
//             <td><input type="checkbox" v-if="checkmode"></td>\
//             <td>{{ todo }}</td>\
//             <td>{{ desc }}</td>\
//             <td>{{ importance }}</td>\
//             <td>{{ due }}</td>\
//             <td><button class="delete" v-on:click="$emit(\'remove\')">Delete</button>\
//             <button class="update"> Update </button></td>\
//         </tr>\
//         ',
//     props: ['todo', 'desc', 'importance', 'due']
//     // props: {
//     //     todo: String,
//     //     desc: String,
//     //     importance: {
//     //         type: String,
//     //         validator: function(value) {
//     //             if(value.length < 1){
//     //                 alert('반드시 선택해주세요~~')
//     //             }
//     //             return value.length <1
//     //         }
//     //     },
//     //     due: {
//     //         type: String
//     //     }
//     // }
// })

var todoItem = {
    template: '\
        <tr>\
            <td>{{ id }}</td>\
            <td>{{ todo }}</td>\
            <td>{{ desc }}</td>\
            <td>{{ importance }}</td>\
            <td>{{ due }}</td>\
            <td><button class="delete" v-on:click="$emit(\'remove\')">Delete</button>\
            <button class="update"> Update </button></td>\
        </tr>\
        ',
    props: ['id', 'todo', 'desc', 'importance', 'due']
}
//기본 list
var todolist = new Vue({
    el: '#todo-list',
    data: {
        todos: [
            {id: 1, todo: 'Todo1', desc: 'Todo1입니다.', 
                importance: '1', due: ''},
            {id: 2, todo: 'Todo2', desc: 'Todo2입니다.', 
                importance: '2', due: '2018-01-30'},
            {id: 3, todo: 'Todo3', desc: 'Todo3입니다.', 
                importance: '5', due: ''}
        ]
    },
    components: {
        'todo-item': todoItem
    }
})

Vue.component('header-message',{
    template: '\
    <div class="page-header"><h3>{{ message }} </h3></div>\
    ',
    props: ['message']
})

var len = todolist.todos.length

// addition / deletion / update component 생성
var addition = {
    data: function(){
        return {
            header: 'Todo list 작성해주세요.',
            todo: '',
            desc: '',
            importance: '',
            due: '',
            newId: len+1
        }
    },
    methods:{
        addTodo:function(){
            console.log('this.newId', this.newId)
            todolist.todos.push({id: this.newId++, todo: this.todo, desc: this.desc,
                importance: this.importance, due: this.due})
            len++
            this.todo=''
            this.desc=''
            this.importance=''
            this.due=''
        }
    },
    template: '#add-page',
}

var deletion = {
    methods: {
        deleteTodo: function(){
            
        }
    },
    template:'#delete-page'
};

var update = {
    template: '#update-page'
};

// 경로에 따라 표시될 component 매칭
var routes=[
    { path: '/addition', component: addition },
    { path: '/deletion', component: deletion },
    { path: '/update', component: update }
];

// 라우터 생성
var router = new VueRouter({
    routes: routes
});

// 인스턴스 선언
var app = new Vue({
    router: router
}).$mount('#bottom');