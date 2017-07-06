import Clickoutside from 'element-ui/lib/utils/clickoutside';
import { Vue, Prop, Component } from 'vue-property-decorator';
import { Message } from 'element-ui';
import C8Dialog from "@/components/c8-dialog/c8-dialog.vue";
import C8DialogComponent from "@/components/c8-dialog/c8-dialog.component";
import PlatformService from "@/services/platform.service";
@Component({
    name: "platform-edit",
    directives: { Clickoutside },
    components: { C8Dialog }
})
export default class PlatformEditComponent extends Vue {
    service: PlatformService = new PlatformService();
    form: any = {};
    private dialog: C8DialogComponent;
    formLabelWidth: String = "100px";
    // dialogTableVisible:boolean=false;
    mounted() {
        let win: any = this.$refs["dialog"];
        this.dialog = win;
    }
    show() {
        this.dialog.title = "平台新增";
        this.dialog.show();
    }
    close() {
        this.dialog.close();
    }
    save(num) {
        console.log(this.form);
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
        this.service.saveModel(this.form).then(r => {
            if (r.data.result) {
                this.close();
            }
        });
    }
}

