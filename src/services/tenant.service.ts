import axios from 'axios';
import { CallResult } from "@/business-model/CallResult";
export default class TenantService {
tenantFuzzy(params){
    return axios.get(`tenant/search-by-name`,{params:params});
}
}