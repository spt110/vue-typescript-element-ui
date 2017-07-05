import { Vue, Prop, Component } from 'vue-property-decorator'
@Component({
  name: 'platform-detail'
})
export default class PlatformDetailComponent extends Vue {
    _detailInfo: any;
    @Prop()
    set detailInfo(value: any) {
        this._detailInfo = value;
        this.getDetail();
    }
    get detailInfo() {
        return this._detailInfo;
    }
    @Prop()
    statusProp: any;
    companyInfo: any = {};
    resSetList: any[] = [];
    detailAll: any[] = [];
    showFalse: boolean = false;
    tenantModalShow: boolean = false;
    tenantModal: String = "";
    tenantList: any[] = [];
    servicePackageModalShow: boolean = false;
    servicePackageModal: String = "";
    servicePackageList: any[] = [];
    accountDetails: any[] = [];
    accountSearch: String = "";
    multiplFalse: boolean = false;
    // 通过对应的集团 or 公司获取公司列表
    getDetail() {
    }
    formatDate(item) {
        return (item.substr(0, 4) + '-' + item.substr(4, 2) + '-' + item.substr(6, 2));
    }
    // 复制
    copy() {
    }
    edit() {
    }
    del() {
    }
    showAll(index) {
        this.resSetList[index].hover = true;
        console.log('in');
    }
    hideAll(index) {
        this.resSetList[index].hover = false;
        console.log('out');
    }
    addGroup() {
        this.tenantModalShow = true;
    }
    addServicePackage() {
        this.servicePackageModalShow = true;
    }
  
    delTenant(id) {
      
    }
    delPackage(id) {
     
    }
    searchAccount() {
    
    }
}


