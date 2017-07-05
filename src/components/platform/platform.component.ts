import PlatformService from '../../services/platform.service';
// import User from '../../components/user/index.vue';
// import Detail from './detail.vue';
// import Popup from './popup.vue';
// import PopupEdit from './popup-edit.vue';
import moment from 'moment';
import debounce from 'throttle-debounce/debounce';
import { Vue, Prop, Component } from 'vue-property-decorator'
 import TodoListItem from '@/components/todo-list-item/TodoListItem.vue'
 import ZeusMenu from '@/components/zeus-menu/zeus-menu.vue';
 import ZeusUser from '@/components/zeus-user/zeus-user.vue';
  @Component({
   components: {
    ZeusMenu,
    ZeusUser
    }
  })
export default class PlatformComponent extends Vue {
    service: PlatformService = new PlatformService();
    loading: boolean = true;
    loadOVer: boolean = true;
    filter = {
        serviceName: '', // 服务包名称
        companyName: '' // 公司名称
    };
    dataStart: String = ''; // 开始时间
    dataEnd: String = ''; // 结束时间
    navList: any = []; // 状态栏信息,
    tabs = []; // 左侧 tab 标签
    activeStatus: String = '1';
    contractList: any[] = []; // 左侧信息列表
    activeItem: any = null; // 左侧选中的信息
    params = {
        row: 10,  // 每页条数
        status: 1, // 查询状态
        page: 0 // 翻页
    };
    popupInfo: any = null;
    companyInfo: any = null // 公司信息 - 修改

    created() {
     this.search();
    }

    // 获取左侧列表接口
    fetchData(params) {
        this.loading = true;
        this.service.search(params, params)
            .then(({ data }) => {
                if (data.length && data.length === this.params.row) this.loading = false;

                this.contractList.push(...data);


                if (!data.length) {
                    this.loadOVer = true;
                    return;
                }
                this.activeItem = this.contractList[0];
            });
    }
    formatDate(item) {
        return (item.substr(0, 4) + '/' + item.substr(4, 2) + '/' + item.substr(6, 2));
    };
    loadMore() {
        this.params.page += 1;
        let params2 = {
            "pageIndex": this.params.page,
            "pageRowCount": 10,
            "paramters": {
                "platformName": this.filter.serviceName,
                "status": this.params.status
            }
        };
        this.fetchData(params2);
    }
    // 接口
    summary(params) {
        return this.service.summary(params)
            .then(({ data }) => {
                this.tabs = data;
            });
    }
    // 顶部搜索
    search() {
        this.params.page = 0;
        let params2 = {
            "pageIndex": 0,
            "pageRowCount": 10,
            "paramters": {
                "platformName": this.filter.serviceName,
                "status": this.params.status
            }
        };
        this.navList = Object.keys(this.filter).map(key => {
            return {
                key,
                value: this.filter[key]
            };
        }).filter(item => {
            return !!item.value;
        });

        this.contractList = [];
        this.summary(params2)
            .then(() => {
                this.fetchData(params2);
            });
    }

    handleClose(index) {
        this.filter[this.navList[index].key] = '';
        this.navList.splice(index, 1);
        this.search();
    }
    // 点击左侧
    active(item) {
        this.activeItem = item;
    }
    copy(value) {
        this.popupInfo = value;
    }
    edit(value) {
        this.companyInfo = value;
    }
    clearEdit() {
        this.companyInfo = null;
    }
    clear() {
        this.popupInfo = null;
    }
    upload() {
        this.search();
    }
    addNew() {
        this.popupInfo = {
            new: true
        };
    }

}