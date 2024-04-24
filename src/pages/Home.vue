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
    <div class="field">
      <label for="content" class="">Content: </label>
      <Editor v-model="content" htmlValue="page.content" editorStyle="min-height: 12rem" />
    </div>
    <Button label="Submit" @click="submit" />
    <Toast />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Editor from 'primevue/editor'
import axios from 'axios'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const title = ref('');
const url = ref('');
const metaKeywords = ref('');
const content = ref('lllllll');

async function submit() {
  if (!title.value || !url.value || !metaKeywords.value || !content.value) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Fill all inputs!', life: 3000 });
  } else {
    try {
      const res = await axios.post('http://localhost:3000/pages', {
        title: title.value,
        urlSlug: url.value,
        metaKeywords: metaKeywords.value,
        content: content.value
      });
      console.log(res.data);
      toast.add({ severity: 'success', summary: 'Success', detail: "Site with " + title.value + " has been created successfully.", life: 3000 });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
