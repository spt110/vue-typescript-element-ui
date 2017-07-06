import Clickoutside from 'element-ui/lib/utils/clickoutside';
import { Vue, Prop, Component } from 'vue-property-decorator';
import { Dialog } from 'element-ui';
@Component({
    name: "platform-edit",
})
export default class C8DialogComponent extends Vue {
    private dialog:Dialog;
    dialogTableVisible:boolean=false;
    mounted() {
        let win: any = this.$refs["dialog"];
        this.dialog =win;
    }
    show() {
        this.dialogTableVisible=true;
    }
    close() {
       this.dialogTableVisible=false;
    }
    getDialog()
    {
        return this.dialog;
    }
}