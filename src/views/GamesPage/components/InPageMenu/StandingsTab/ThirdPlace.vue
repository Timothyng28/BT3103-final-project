<template>
    <div class="flex mr-3 mt-10">
      <ol class="flex flex-1 flex-col justify-around mr-5 ml-5 round">
        <li id="round-4" class="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span class="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          <div class = "flex justify-between w-full">
      <p class = "text-gray-900">Kent Ridge</p>
      <p class ="pr-3">0</p>
    </div>
        </li>
        <li class="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span class="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          <div class = "flex justify-between w-full">
      <p>Sheares</p>
      <p class ="pr-3">1000</p>
    </div>
        </li>
      </ol>
      <ol class="flex flex-1 flex-col justify-around mr-5 ml-5 round round-winner">
        <li id="round-5" class="flex items-center m-2 p-1 leading-relaxed bg-gray-600 text-gray-300 rounded-full relative with-connector">
          <span class="w-6 h-6 ml-1 mr-1 inline-block bg-gray-300 rounded-full"></span>
          <p class = "text-amber-600">Sheares</p>
        </li>
      </ol>
    </div>
    
    <!-- third place-->
    </template>
    
    <script>
    export default {
      name: "Thirdplace",
    };
    </script>
    
    <style scoped>
    
    .with-connector:after {
      content: ' ';
      position: absolute;
      left: calc(100% + 0.5rem); /* participant size (includes margin) */
      width: 1.25rem; /* round margin-right */
      border: 2px solid #e2e8f0;
      border-left: none;
    }
    
    .with-connector:nth-child(odd):after {
      top: 50%;
      border-bottom: none;
    }
    
    .with-connector:nth-child(even):after {
      bottom: 50%;
      border-top: none;
    }
    
    .round:nth-child(1) .with-connector:after {
      height: 25px;
    }
    
    .round:nth-child(2) .with-connector:after {
      height: 60px;
    }
    
    .round:nth-child(3) .with-connector:after {
      height: 100px;
    }
    
    .round:nth-child(4) .with-connector:after {
      height: 200px;
    }
    
    .round.round-winner .with-connector:after {
      width: 0;
    }
    
    
    .round + .round .with-connector:before {
      content: ' ';
      position: absolute;
      left: -1.75rem; /* competitor margin + current width */
      top: 50%;
      width: 1.25rem; /* round margin-left */
      border-top: 2px solid #e2e8f0;
    }
    
    .with-connector.with-bye {
      margin-top: 33px;
      margin-bottom: 33px;
    }
    
    .round .with-connector.with-bye:after {
      height: 0;
    }
    
    .with-connector.with-bye + .with-connector {
      display: none;
    }
    .round:last-child .with-connector:last-child:after {
      content: none;
    }
    
    </style>