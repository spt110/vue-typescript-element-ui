import Clickoutside from 'element-ui/lib/utils/clickoutside';
import { Vue, Prop, Component } from 'vue-property-decorator';
import C8Dialog from "@/components/c8-dialog/c8-dialog.vue";
import C8DialogComponent from "@/components/c8-dialog/c8-dialog.component";
import TenantService from "@/services/tenant.service";
import PlatformEdit from '@/pages/platform/edit/platform-edit.vue';
@Component({
    name: "tenant-select-dialog",
    components: { C8Dialog }
})
export default class TenantSelectDialogComponent extends Vue {
    service: TenantService = new TenantService();
    form: any = {};
    private dialog: C8DialogComponent;
    mounted() {
        let win: any = this.$refs["dialog"];
        this.dialog = win;
    }
    show() {
        this.dialog.title = "请选择集团";
        this.dialog.show();
    }
    close() {
        this.dialog.close();
    }
    /**
     * 查询方法
     * 
     * @param {any} queryString 
     * @param {any} cb 
     * @memberof TenantSelectDialog
     */
    queryAsync(queryString, cb) {
        let params = {
            tenantName: queryString,
            row: 5,
            page: 0
        };
        //alert(1)
        this.service.tenantFuzzy(params)
            .then(({ data }) => {
                console.log(data);
                data = data.slice(0, 5);
                var result = data.map(function (item, index) {
                    let itemN: any = {};
                    itemN.value = item.name;
                    itemN.id = item.id;
                    return itemN
                });
                cb(result);
            });
    }
    /**
     * 选中事件
     * 
     * @param {any} item 
     * @memberof TenantSelectDialog
     */
    selectItem(item) {
      this.$emit('selectItem',item);
    }
}