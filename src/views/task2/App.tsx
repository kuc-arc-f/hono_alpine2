import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

const Test1html = html`
<div class="mb-5" x-data="data.data2">
  <h1 class="text-3xl font-bold mb-3">data2</h1>
  <hr class="my-2" />
  <p class="text-1xl font-bold" x-text="text1"></p>
  <hr class="my-2" />
  id: <span class="text-1xl font-bold" x-text="item.id"></span><br />
  title: <span class="text-1xl font-bold" x-text="item.title"></span>
</div>     
`;
/*
 <h3 class="text-3xl font-bold">hello-123456</h3> 
*/
//
export const TaskIndex2: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  //
  return (
    <Layout title="TaskIndex">
      <div>
        <div id="root"></div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.1/dist/cdn.min.js"></script>
        {/* JS */}
        {html`<script src="/js/task2/data1.js?${timeStamp}"></script>`}        
        {html`<script src="/js/task2/data2.js?${timeStamp}"></script>`}        
        {html`<script src="/js/task2/data.js?${timeStamp}"></script>`}        
        {/* alpine  */}
        {html`
        <h1 class="text-4xl font-bold">Task2</h1>
        <hr class="my-2" />
        <!-- x-data-base -->
        <div class="mb-5" x-data="data">
          <!-- x-data-1 -->
          <h1 class="text-3xl font-bold mb-3">data1</h1>
          <div class="mb-5" x-data="data.data1">
              <template x-for="(item, index) in items" :key="item.id">
                <div x-data="{ ...{ item } }">
                  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mb-5">
                    <h3 class="mb-2 text-3xl font-bold tracking-tight text-gray-900"
                     x-text="item.title">
                    </h3>
                    ID: <span x-text="item.id"></span>
                    , <span x-text="item.createdAt"></span>
                    <button class="btn" @click="test2(index)">Show</button>
                  </div>
                </div>
              </template>
          </div>
          <hr class="my-2" />
          <!-- x-data-2 -->
          ${Test1html}
        </div>
        `}
        <hr class="my-2" />
      </div>
    </Layout>
  )
}

/*
             
*/