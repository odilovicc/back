<template>
  <div class="flex flex-column">
    <div class="formfield grid">
      <div class="field col">
        <label for="title" class="col-fixed">Title: </label>
        <div class="col-fixed">
          <InputText v-model="title" class="w-full" type="text" id="title" />
        </div>
      </div>
      <div class="field col">
        <label for="url" class="col-fixed">Url Slug: </label>
        <div class="col-fixed">
          <InputText v-model="url" class="w-full" type="text" id="url" />
        </div>
      </div>
      <div class="field col">
        <label for="metaKeywords" class="col-fixed">Meta keywords: </label>
        <div class="col-fixed">
          <InputText v-model="metaKeywords" class="w-full" type="text" id="metaKeywords" />
        </div>
      </div>
    </div>
    <div class="field col">
      <label for="content" class="">Content: </label>
      <Editor v-model="content" editorStyle="min-height: 12rem" />
    </div>
    <Button label="Submit" @click="submit" />
    <Toast />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import Editor from 'primevue/editor'
import { useStore } from 'vuex'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

const store = useStore()
const toast = useToast()

const title = ref('');
const url = ref('');
const metaKeywords = ref('');
const content = ref('');

async function submit() {
  const response = axios.get('http://localhost:3000/pages')
  if (response.status !== 201) {
    await store.dispatch("submit", {
      title: title.value,
      url: url.value,
      metaKeywords: metaKeywords.value,
      content: content.value
    }),
      toast.add({ severity: "success", detail: "Created", life: 3000 })
  } else {
    console.log("Error")
  }
}

</script>
