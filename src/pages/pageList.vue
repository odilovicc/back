<template>
    <div class="flex flex-column gap-5">
        <div v-for="page in pages" :key="page.id">
            <Panel :header="page.id + ' | ' + page.title">
                <div class="formgrid grid">
                    <div class="field col">
                        <label>Title: </label>
                        <InputText v-model="page.title" class="w-full" />
                    </div>
                    <div class="field col">
                        <label>URL Slug</label>
                        <InputText v-model="page.url" class="w-full" />
                    </div>
                    <div class="field col">
                        <label>Meta keywords</label>
                        <InputText v-model="page.metaKeywords" class="w-full" />
                    </div>
                </div>
                <div class="field">
                    <label>Content: </label>
                    <Editor editorStyle="min-height: 12rem;" v-model="page.content" />
                </div>
                <div class="mt-5 flex gap-3">
                    <Button label="Edit" @click="editPage(page)" />
                    <Button label="Delete" severity="danger" @click="deletePage(page)" />
                    <Toast />
                </div>
            </Panel>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Editor from 'primevue/editor'
import Toast from 'primevue/toast'
import { useToast } from "primevue/usetoast";
import { useStore } from 'vuex'

const toast = useToast()
const store = useStore()
const pages = computed(() => store.state.pages)

async function fetchPages() {
    try {
        await store.dispatch("fetchPages");
        toast.add({ severity: 'success', detail: 'Pages has been fetched', life: 3000 });
    } catch (e) {
        console.log(e);
        toast.add({ severity: 'danger', detail: 'danger', detail: e, life: 3000 });
    }
}

async function editPage(page) {
    try {
        await store.dispatch('editPage', page);
        toast.add({ severity: 'success', detail: 'Edited', life: 3000 });
    } catch (error) {
        console.log(error)
    }
}

async function deletePage(page) {
    try {
        await store.dispatch('deletePage', page);
        toast.add({ severity: 'success', detail: 'Page has been deleted', life: 3000 });
    } catch (error) {
        console.error(error);
    }
}

onMounted(fetchPages);
</script>
