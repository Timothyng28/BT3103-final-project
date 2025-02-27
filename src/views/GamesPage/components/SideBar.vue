<template>
    <ul class="menu bg-base-200 rounded-box w-40">
        <!-- replace with v-for loop when actually implementing -->
      <li>
        <details>
          <summary>Football</summary>
          <ul>
            <li><a>Male</a></li>
            <li><a>Female</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Basketball</summary>
          <ul>
            <li><a>Male</a></li>
            <li><a>Female</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Tennis</summary>
          <ul>
            <li><a>Male</a></li>
            <li><a>Female</a></li>
          </ul>
        </details>
      </li>
    </ul>
    </template>
    
    <script>
    export default {
      name: 'SideBar',
    }
    
    // some methods to emit user selection to GamesPage.vue
    </script>