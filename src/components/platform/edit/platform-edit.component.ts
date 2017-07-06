import Clickoutside from 'element-ui/lib/utils/clickoutside';
import { Vue, Prop, Component } from 'vue-property-decorator';
import { Message,Dialog } from 'element-ui';

@Component({
    name: "platform-edit",
    directives: { Clickoutside }
})
export default class PlatformEditComponent extends Vue {
    form: any = {};
   private dialog:Dialog;
    formLabelWidth:String="100px";
    dialogTableVisible:boolean=false;
     mounted() {
        let win: any = this.$refs["dialog"];
        this.dialog =win;
    }
    show() {
       // this.showBox = true;
        this.dialogTableVisible=true;
    }
    close() {
       this.dialogTableVisible=false;
    }
    save(num) {
        if (!this.form.platformName) {
            Message({
                showClose: true,
                message: '平台名称不能为空！',
                type: 'warning'
            });
            return;
        }
        if (!this.form.platformCode) {
            Message({
                showClose: true,
                message: '平台编号不能为空！',
                type: 'warning'
            });
            return;
        }
    }
}

