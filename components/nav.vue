<template>
    <nav class="flex flex-wrap mx-auto p-2 md:pt-12 z-30">
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown flex justify-center">
                    <label tabindex="0" class="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabindex="0"
                        class="menu dropdown-content mt-12 z-[1] p-2 shadow rounded-box w-52 bg-white">

                        <template v-for="item in menuItems" :key="item.name">
                            <li v-if="!item.drop">
                                <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                            </li>

                            <template v-else tabindex="0"
                                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                <li>
                                    <a>{{ item.name }}</a>
                                    <ul class="p-2">
                                        <template v-for="subitem in item.items">
                                            <li><a>{{ subitem.name }}</a></li>
                                        </template>
                                    </ul>
                                </li>
                            </template>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="navbar-center hidden md:flex">
                <ul id="menu-md" class="menu menu-horizontal px-1 text-xl uppercase gap-6">
                    <template v-for="item in menuItems" :key="item.name">
                        <li v-if="!item.drop">
                            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                        </li>

                        <li v-else>
                            <details>
                                <summary>{{ item.name }}</summary>
                                <ul tabindex="0" id="dropdown-md" class="p-2 !rounded-none !bg-gray-200 shadow-xl !mt-0">
                                        <li v-for="subitem in item.items"><a>{{ subitem.name }}</a></li>
                                </ul>
                            </details>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="navbar-end">
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '#', drop: true, items: [{ name: 'Dining', link: '#' }, { name: 'Bedroom', link: '#' }] },
    { name: 'Quotation', link: '#' },
    { name: 'Contact', link: '#' },
    { name: 'Inspire Me', link: '#' },
]
</script>