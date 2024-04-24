<template>
    <Editor :editor="editor" v-model="val"/>
</template>
<script setup>
import {ref} from 'vue'
import Editor from 'primevue/editor'

const val = ref('<h1>Hello</h1>')
</script>