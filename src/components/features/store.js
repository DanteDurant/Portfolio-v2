import { writable } from 'svelte/store';

export let modalState = writable(false);
console.log(modalState);