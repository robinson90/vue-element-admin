import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {

    state : {
        roles:[],
        name:'',
        avatar:'',
        introduction:'',
        token :getToken()
    },

     mutations : {
        SET_NAME(state,name){

        },
        SET_AVATAR(state,avatar){

        },
        SET_INTRODUCTION(state,introduction){

        },


    },
    actions : {
        // 获取用户角色
    GetUserInfo({ commit, state }){
        const data = {
            name:'user',
            avatar:'',
            introduction:'自我介绍'
        }    
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_INTRODUCTION', data.introduction)
    },
     // 前端 登出
     FedLogOut({ commit }) {
          commit('SET_TOKEN', '')
          removeToken()
      },
    }


}




export default user