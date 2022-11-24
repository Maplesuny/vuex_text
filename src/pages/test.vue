<template>
    <div></div>
    <q-btn @click="click">dfd</q-btn>
</template>

<script>
import { onMounted, computed, ref, watch } from 'vue'
import store from '../store/index'
import axios from 'axios'
export default {
    setup () {
        // const { todos, click } = usetodo1()

        const todos = computed(() => store.getters['getter_todo']);

        store.dispatch('GET_TODO')

        const click = () => {
            axios.post('http://127.0.0.1:8000/api/v1/post1').then(() => {
                store.dispatch('GET_TODO')
            })
        }

        // // // console.log('todos', todos.value)
        watch(todos.value, () => {
            console.log('test.vue的todos;', todos.value)
        })

        return {
            click
        }

    },
}
</script>