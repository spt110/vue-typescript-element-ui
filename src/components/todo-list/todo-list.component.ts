
  import {Vue, Component} from 'vue-property-decorator'
  import Todo from '@/models/todo'
  import TodoListItem from '@/components/todo-list-item/TodoListItem.vue'

  @Component({
   components: {
    TodoListItem
    }
  }
  )
  export default class TodoListComponent extends Vue {
    visible:boolean=false;
    newtask: String = ''

    todos= [
      {id: 1, task: 'First task', done: true},
      {id: 2, task: 'Second task', done: false}
    ]
    addTodo (newtodo) {
      this.todos.push(new Todo(this.todos.length + 1, newtodo, false))
    }
    beforeCreate(){
      //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置
      //之前被调用。
   // console.log('beforeCreate visible is: ' + this.visible);
    console.log("beforeCreate");
    }
    created () {// created 这个钩子在实例被创建之后被调用
     // 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
      // watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    this.log("created");
     }
     beforeMount(){
       //在挂载开始之前被调用：相关的 render 函数首次被调用。
       //该钩子在服务器端渲染期间不被调用
       this.log("beforeMount");
     }
     mounted(){
       //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
       //如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
       //该钩子在服务器端渲染期间不被调用。
       this.log("mounted");
     }
     beforeUpdate(){
       //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
       //你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
       //该钩子在服务器端渲染期间不被调用
       this.log("beforeUpdate");
     }
     updated(){
      // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
      // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
      // 该钩子在服务器端渲染期间不被调用
      this.log("updated");
     }
     activated(){
       //keep-alive 组件激活时调用。
       this.log("activated");
     }
     deactivated(){
       //keep-alive 组件停用时调用。
       //该钩子在服务器端渲染期间不被调用。
       this.log("deactivated");
     }
     beforeDestroy(){
    //实例销毁之前调用。在这一步，实例仍然完全可用。
     //该钩子在服务器端渲染期间不被调用。
     this.log("beforeDestroy");
    }
    destroyed(){
     // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
     //该钩子在服务器端渲染期间不被调用。
     this.log("destroyed");
    }

    log(msg:string){
      //this.todos.push(new Todo(this.todos.length + 1, msg, false))
      console.log(msg+"  "+this.visible);
      //console.log(this.$data);
    }
  }
