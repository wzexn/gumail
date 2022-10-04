import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    //仓库初始状态
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};
const actions = {
    //获取search模块的数据
    async getSearchList({ commit }, params = {}) {
        //当前这个reqGetSearchInfo在调用服务器数据的时候，至少需要传递一个参数（空对象）
        //params形参：是当前用户派发actions的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {       
            commit("GETSEARCHLIST", result.data);
        }
    }
};
//计算属性
//项目当中gettings主要的作用是  ：简化仓库中的数据
//可以把我们将来要用的数据简化一下【方便获取数据】  
const getters = {
    goodsList(state){
        return state.searchList.goodsList;
    },
    trademarkList(state){
        return state.searchList.trademarkList;
    },
    attrsList(state){
        return state.searchList.attrsList;

    }, 
};
export default {
    state,
    mutations,
    actions,
    getters,
}