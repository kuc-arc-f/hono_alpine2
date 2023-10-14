import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const AlpineTest2: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <h1 class="text-4xl font-bold">AlpineTest2 </h1>
        <hr class="my-2" />
        <div id="root"></div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.1/dist/cdn.min.js"></script>
        {/* alpine  */}
        {html`
        <h3 class="text-3xl font-bold">x-for + API</h3>
        <hr class="my-2" />
        <div class="mb-5" x-data="data">
            <template x-for="item in items" :key="item.id">
              <div x-data="{ ...{ item }}">
                <p class="mb-3 font-normal text-gray-700" x-text="item.title"></p>
                id: <span class="mb-3 font-normal text-gray-700" x-text="item.id"></span>
                <hr class="my-2" />
              </div>
            </template>
            <!-- button --> 
            <button @click="get_list()" class="btn-purple ms-2 my-2">Test</button>
        </div>
        `}
        <hr class="my-2" />
        {/* JS */}
        {html`<script src="/js/csr/alpine2.js?${timeStamp}"></script>`}

               
      </div>
    </Layout>
  )
}

/*
alpine2.js
              ID:<p class="mb-3 font-normal text-gray-700" x-text="item.id"></p><hr />
              <div x-text="item.id"></div>

{html`<script></script>`}
*/