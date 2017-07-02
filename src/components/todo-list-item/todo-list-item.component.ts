import Todo from '@/models/todo'
import {Vue, Prop, Component} from 'vue-property-decorator'

@Component({
  name: 'todo-list-item'
})
export default class TodoListItemComponent extends Vue {
  @Prop({default: false})
  todo: Todo
}
