<template>
    <div class="py-3">
        <ul class="flex gap-3">
            <li class="list-none">
                <RouterLink class="no-underline hover:underline" to="/">Create Page</RouterLink>
            </li>
            <li class="list-none">
                <RouterLink class="no-underline hover:underline" to="/list">List of pages</RouterLink>
            </li>
        </ul>
    </div>

</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>