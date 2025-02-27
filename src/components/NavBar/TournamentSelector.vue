<template>
    <div class="dropdown dropdown-hover">
      <div tabindex="0" class="px-2 py-1 cursor-pointer hover:bg-gray-400 rounded-md text-black">IHG24/25</div>
      <ul
        tabindex="0"
        class="dropdown-content menu bg-base-200 rounded-box w-auto p-2 shadow-sm"
      >
        <ul class="menu bg-base-200 rounded-box w-56">
          <li>
            <details>
              <summary>IHG</summary>
              <ul class="menu bg-base-200 rounded-box w-40">
                <li><a>24/25</a></li>
                <li><a>23/24</a></li>
                <li><a>22/23</a></li>
                  <li class="menu-disabled"><a>...more</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>ICG</summary>
              <ul class="menu bg-base-200 rounded-box w-40">
                <li><a>24/25</a></li>
                <li><a>23/24</a></li>
                <li><a>22/23</a></li>
                  <li class="menu-disabled"><a>...more</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "TournamentSelector",
  };
  </script>
  