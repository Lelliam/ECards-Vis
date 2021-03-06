import Vue from "vue";
import Vuex from "vuex";
import mutation from "./mutation";
import action from "./action";
import getter from "./getter";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 定义状态
  state: {
    status:0,
    group:'',
    current_cluster:'',
    current_canteen:'',
    arrangeDinging:false,
    cf_value:[],
    df_value:[],
    adj_nodes:[],
    sim_nodes:[]
  },
  mutations: mutation,
  actions: action,
  getters: getter
});

export default store;
