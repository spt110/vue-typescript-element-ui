import { Vue, Component } from 'vue-property-decorator'
 //import Api from '../../services/login.js';
  import Clickoutside from 'element-ui/lib/utils/clickoutside';
@Component({
  name: 'zeus-user',
   directives: { Clickoutside }
})
export default class UserComponent extends Vue {
        activeName:string= '';
        showDropDown:boolean= false;
      dropDown() {
        this.showDropDown = !this.showDropDown;
      }
      handleBlur() {
        this.showDropDown = false;
      }
      logout() {
        //const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        // Api.logout({
        //   token: userInfo.token,
        //   accountId: userInfo.username
        // })
        // .then(({data}) => {
        //   if (data.code === 1) {
        //     this.$message({
        //       message: '退出成功',
        //       type: 'success'
        //     });
        //     setTimeout(() => {
        //       location.href = '/login';
        //     }, 500);
        //   } else {
        //     this.$message({
        //       message: data.message,
        //       type: 'warning'
        //     });
        //   }
        // });
      }
    }