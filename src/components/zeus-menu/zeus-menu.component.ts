import { Vue, Component } from 'vue-property-decorator'
import Clickoutside from 'element-ui/lib/utils/clickoutside';
import Route from '../../router/routers';

@Component({
  name: 'zeus-menu',
  directives: { Clickoutside }
})
export default class ZeusMenuComponent extends Vue {
  activeName: string = '';
  showDropDown: boolean = false;
  get menuRoutes() {
    return Route.filter(x => x.meta.menu);
  }
  created(): void {
    console.log(Route);
    const active = Route.filter(x => this.$route.path.indexOf(x.path) > -1).map(x => x.name);
    this.activeName = active[0];
  }
  dropDown(): void {
    this.showDropDown = !this.showDropDown;
  }
  handleBlur(): void {
    this.showDropDown = false;
  }
}