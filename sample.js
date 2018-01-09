
var intro = new Vue({
    el: '#intro',
    data: {
        header: 'Todo 추가'
    }
})

var options = [
    {num: 1, value: '매우 낮음'},
    {num: 2, value: '낮음'},
    {num: 3, value: '보통'},
    {num: 4, value: '높음'},
    {num: 5, value: '매우 높음'}
]

// v-model을 이용해서 사용자가 선택한 옵션에 따라 value값을 html에 출력해줌
var selected = new Vue({
    el: '#select-importance',
    data: {
        selected: '보통',
        options: options
    }
})

Vue.component('todo-item', {
    template: '\
        <tr>\
            <td>{{ todo }}</td>\
            <td>{{ desc }}</td>\
            <td>{{ importance }}</td>\
            <td>{{ due }}</td>\
            <td><button class="delete" v-on:click="$emit(\'remove\')">Delete</button>\
            <button class="update"> Update </button></td>\
        </tr>\
        ',
    //props: ['todo', 'desc', 'importance', 'due']
    props: {
        todo: String,
        desc: String,
        importance: Number,
        due: {
            // 유효성 검사 해주고자 하는데 Error 있음!!
        }
    }
})

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

})

var addition = new Vue({
    el:'#add-page',
    data: {
        todo:'',
        desc:'',
        importance:'',
        due:'',
        newId: function(){
            return todolist.todos.length
        }
    },
    methods: {
        addTodo: function(){
            var todo = {id: this.newId++, todo: this.todo, desc: this.desc, 
                        importance: this.importance, due: this.due}
            todolist.todos.push(todo)

            this.todo=''
            this.desc=''
            this.importance =''
            this.due=''
        }
    }
})

var deletion = new Vue({

})

var update = new Vue({

})