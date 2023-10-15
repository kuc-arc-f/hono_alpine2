import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const TaskIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout title="TaskIndex">
      <div>
        <div id="root"></div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.1/dist/cdn.min.js"></script>
        {/* alpine  */}
        {html`
        <h1 class="text-4xl font-bold">Tasks</h1>
        <hr class="my-2" />
        <div class="mb-5" x-data="data">
            <template x-for="item in items" :key="item.id">
              <div x-data="{ ...{ item }}">
                <h3 class="mb-3 text-3xl font-bold" x-text="item.title"></h3>
                id: <span class="mb-3 font-normal text-gray-700" x-text="item.id"></span>
                , <span class="mb-3 font-normal text-gray-700" x-text="item.createdAt">
                </span>
                <a :href="item.url" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                [ Show ]
                </a>                
                <hr class="my-2" />
              </div>
            </template>
            <!-- button --> 
            <button @click="get_list()" class="btn-purple ms-2 my-2">Test</button>
        </div>
        `}
        <hr class="my-2" />
        {/* JS */}
        {html`<script src="/js/tasks/index.js?${timeStamp}"></script>`}        
      </div>
    </Layout>
  )
}

/*
<p class="mb-3 font-normal text-gray-700" x-text="item.title"></p>
*/