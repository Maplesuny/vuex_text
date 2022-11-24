import { createStore } from "vuex";
import axios from 'axios'
import { ref } from "vue";


let list_ = ref([])

export default createStore({

  state:{
      Todos:list_
  },
  actions:{
    GET_TODO(context){
       axios.get('http://127.0.0.1:8000/api/v1/ee').then((res)=>{
          context.commit('getTodo',res.data)
      })
    }
  },
  mutations:{
     getTodo(state,payload){
      console.log('Mutations')
      list_.value.splice(0, list_.value.length)
      for(let i = 0;i<payload.length;i++){
       list_.value.push(payload[i])
      }
    },
  },
  getters:{
      getter_todo(state){
        console.log('Getters')
        return state.Todos
      }
  }
})
