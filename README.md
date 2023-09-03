# Instalasi
## Instalasi Node
1. Buka website https://nodejs.org/en/download

![downloadpage](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/a009381f-0a58-40d4-b3ee-d712cbad9700)
2. Download Node versi 16 atau lebih tinggi

![setup1](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/cf6fcc9a-1616-4da4-b791-edd7ecc6fe02)

3. Buka file download, lalu klik Next

![setup2](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/fcc66f7f-d5f3-4812-99fd-7e60cb538c4e)

4. Klik checkbox agreement, lalu klik Next 

![setup3](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/1eac5fa9-20e8-49d9-ad0a-781c1e821f18)

5. Pada destination folder biarkan saja secara default dan klik Next

![setup4](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/e1872178-d426-45e9-8158-00e94e9f20b9)

6. Pada custom setup biarkan juga secara default dan klik Next

![setup5](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/7697fab0-aaf2-48a0-a955-8acabad30767)

7. Pada Tools for Native Modules biarkan secara default juga dan klik Next

![setup6](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/3a0d7b05-9956-4577-8f02-6f482aaf5199)

8. Lalu klik install dan tunggu sampai selesai

9. Buka CMD dan ketik ```node -v``` atau ```npm -v``` untuk melakukan verifikasi instalasi

![verifikasi](https://github.com/lab-kcks/Modul-Pemograman-Web/assets/100351038/11f7fe7e-fc61-4e8e-8c3c-4a784f521232)

## Instalasi Vue
1. Buka CMD dan run command dibawah ini :
```
npm create vue@latest
```
2. Setelah itu, akan ada banyak pilihan, lalu pilih `No` dengan menekan enter kecuali pada `Vue Router`.
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```
3. Lalu pindah pada folder project, dengan cli :
` cd <your-project-name>`
4. Selanjutnya instal node package modules, dengan cli :
` npm run dev `
5. Terakhir jalankan vue, dengan cli : 
` npm run dev `
# Vue Fundamentals
## Introduction
Vue merupakan framework javascript untuk membangun user interfaces yang mencakup sebagian besar fitur umum yang dibutuhkan dalam frontend development. Ini dibangun diatas HTML, CSS, Javascript standar dan menyediakan model pemrograman deklaratif dan berbasis komponen (component-based) yang dapat membantu kita mengembangkan user interface secara efisien. Vue dirancang agar fleksibel dan dapat diadopsi secara bertahap.

Berikut merupakan 2 fitur inti pada vue :
- Perenderan Deklaratif
Vue memungkinkan Anda mendefinisikan tampilan (UI) Anda secara deklaratif menggunakan sintaks template yang mirip dengan HTML. Dengan pendekatan ini, Anda hanya perlu mendeskripsikan bagaimana tampilan harus terlihat berdasarkan status atau data yang diberikan, dan Vue akan mengurus renderingnya secara otomatis saat data berubah.
- Reaktivitas
Vue secara otomatis memantau perubahan dalam data dan secara cerdas memperbarui tampilan hanya saat diperlukan. Jadi, kita tidak perlu memanipulasi DOM secara langsung.

## Attribute Binding
Untuk membuat ikatan antara antara atribut HTML dan nilai dari Vue App, maka digunakan Vue directive yang disebut `v-bind`.`v-bind` digunakan untuk mengikat atribut secara dinamis ke expression. Penggunaan `v-bind` dalam vue sangatlah umum, sehingga ada cara pintas (shorthand) yaitu dengan hanya menggunakan titik dua (:)

Contohnya, atributnya adalah `src` dan ekspressionnya adalah apa pun yang ada dalam tanda kutip atribut tersebut: `"image"`.
```html
data() {
    return {
        image: './assets/images/socks_green.jpg'
    }
}
<img :src="image">
```

## Conditional Rendering

### The v-if directive
Directive `v-if` digunakan untuk menrender berdasarkan suatu kondisi. Directive `v-if` dapat digabungkan dengan directive kembarannya `v-else` untuk menampilkan elemen lain sebagai fallback jika kondisi pertama ternyata salah.

```html
<button @click="awesome = !awesome">Toggle</button>

<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### Show and Hide
Directive `v-show` digunakan untuk mengubah visibilitas elemen artinya `v-show` akan selalu dirender dan tetap berada di dalam DOM, bukan untuk menambah dan menghapus elemen dari DOM secara keseluruhan, seperti yang dilakukan oleh `v-if`.
```html
<p v-show="isVisible">Visible text</p>
```
`v-show` adalah pilihan yang lebih baik dari segi kinerja jika anda memiliki elemen yang sering berubah visibilitasnya.

## List Rendering
Directive `v-for` digunakan untuk membuat daftar berdasarkan array.

```html
<script setup>
import { ref } from 'vue'

const items = ref([
    { id: 1, message: 'Foo' }, 
    { id: 2, message: 'Bar' },
])
</script>

<template>
    <li v-for="item in items" :key="item.id">
    {{ item.message }}
    </li>
</template>
```
Pada `v-for` expression, terdapat list: `item in items`. `items` merujuk pada array `items`, dan `item` adalah array elemen saat ini dari array tesebut, sehingga akan dilakukan looping untuk mencetak `li` array dari seluruh array di `items`. 

`:key` digunakan untuk mengikat `id` objek ke atribut `key` sehingga setiap elemen memiliki tanda pengenal unik. setiap objek dari array memiliki `id` dan `message`.

## Event Handling
Dengan menggunakan v-on, yang biasanya disingkat menjadi simbol @ untuk listen DOM events dan menjalankan beberapa javascript saat di-trigger. Penggunaannya biasanya `v-on:click="functionName"` atau `@click="functionName"`.

### Inline handlers
Inline JavaScript yang akan dieksekusi saat event di-trigger, biasanya digunakan di case simple, seperti :
```html
const count = ref(0)

<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```

### Method handlers
Biasanya logika pada suatu event handler panjang atau komplex, sehingga tidak dapat dilakukan dengan inline handler. Itulah mengapa `v-on` juga dapat menerima nama atau jalur metode komponen yang ingin dipanggil. Contoh :
```html
const greeting = ref('greetings!')
function greet(event) {
  alert(`${greeting.value}`)
}
<button @click="greet">Greet</button>
```
