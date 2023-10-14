import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const AlpineTest: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <h1 class="text-4xl font-bold">AlpineTest </h1>
        <hr class="my-2" />
        <div id="root"></div>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.1/dist/cdn.min.js"></script>
        {/* alpine  */}
        {html`
        <h3 class="text-3xl font-bold">x-text</h3>
        <div x-data="{ title: 'Start Here-1234' }">
            <h1 class="text-1xl font-bold" x-text="title"></h1>
        </div>   
        <hr class="my-2" />     
        <!-- x-show -->
        <h3 class="text-3xl font-bold">x-show</h3>
        <div x-data="{ open: false }">
          <button @click="open = ! open">[ Expand ]</button>
        
          <div x-show="open">
              Content...
          </div>
        </div>
        <!-- x-if -->
        <h3 class="text-3xl font-bold">x-if</h3>
        <hr class="my-2" />
        <div x-data="{ open: false }">
            <button @click="open = ! open">[ Expand ]</button>
         
            <template x-if="open">
                <div>
                    Content...[1234]
                </div>
            </template>
        </div>       
        <hr class="my-2" />
        <!-- x-for -->
        <h1 class="text-3xl font-bold">x-for</h1>
        <hr class="my-2" />
        <div x-data="{ statuses: ['open', 'closed', 'archived'] }">
            <template x-for="status in statuses">
                <div x-text="status"></div>
            </template>
        </div>            
        <hr class="my-2" />        
        `}
        <hr class="my-2" />
        {/*  */}
               
      </div>
    </Layout>
  )
}

/*
{html`<script></script>`}
*/