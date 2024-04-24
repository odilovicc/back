<template>
    <div class="flex flex-column gap-5">
        <div v-for="page in pages" :key="page.id">
            <Panel :header="page.id + ' | ' + page.title" toggleable :collapsed="page.collapsed">
                <div class="formgrid grid">
                    <div class="field col">
                        <label>Title: </label>
                        <InputText v-model="page.title" class="w-full" />
                    </div>
                    <div class="field col">
                        <label>URL Slug</label>
                        <InputText v-model="page.urlSlug" class="w-full" />
                    </div>
                    <div class="field col">
                        <label>Meta keywords</label>
                        <InputText v-model="page.metaKeywords" class="w-full" />
                    </div>
                </div>
                <div class="field">
                    <label>Content: </label>
                    <pre>{{ page }}</pre>
                    <Editor v-if="page.collapsed" editorStyle="min-height: 12rem;" v-model="page.content" />
                </div>
                <div class="mt-5 flex gap-3">
                    <Button label="Edit" @click="editPage(page)" />
                    <Button label="Delete" severity="danger" @click="deletePage(page)" />
                    <Toast/>
                </div>
            </Panel>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Button from 'primevue/button'
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import Editor from 'primevue/editor'
import Toast from 'primevue/toast'
import { useToast } from "primevue/usetoast";

const pages = ref([]);
const toast = useToast()


async function fetchPages() {
    try {
        const res = await axios.get('http://localhost:3000/pages');
        pages.value = res.data;
        pages.value = res.data.map(page => ({
            ...page,
            collapsed: true
        }));
        toast.add({ severity: 'success', summary: 'Successfully', detail: "Done successfully", life: 3000, })
    } catch (e) {
        console.log(e);
        toast.add({ severity: 'danger', summary: 'danger', detail: e, life: 3000, })
    }
}

async function editPage(page) {
    try {
        await axios.put(`http://localhost:3000/create/${page.id}`, page);
        await fetchPages();
    } catch (error) {
        console.error(error);
    }
}
async function deletePage(page) {
    try {
        await axios.delete(`http://localhost:3000/create/${page.id}`, page);
        await fetchPages();
    } catch (error) {
        console.error(error);
    }
}

onMounted(fetchPages);
</script>
