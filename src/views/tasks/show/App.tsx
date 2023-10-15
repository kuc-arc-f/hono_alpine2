import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
//
export const TaskShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const timeStamp = Date.now();
    return (
    <Layout title="TaskShow">
        <div>
            <a href="/tasks" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <h1 class="text-4xl font-bold">{props.item.title}</h1>
            <p>id: {props.item.id}</p>
            <hr class="my-2" />
            {/*
            <pre>{props.item.content}</pre>
            */}
            {/* alpinejs */}
            <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.1/dist/cdn.min.js"></script>
            {html`<script> let itemId = ${props.item.id}; </script>`} 
            {/* template */}
            {html`
            <div class="mb-5" x-data="data">
                <button @click="deleteItem()" class="btn-red ms-2 my-2">Delete</button>
            </div>
            `} 
            {/* JS */}
            {html`<script src="/js/tasks/delete.js?${timeStamp}"></script>`}        
        </div>
    </Layout>
    )
}
/*
{html`<script type="text/babel" src="/js/tasks/show.js?${timeStamp}"></script>`}  
<button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
{html`<script type="text/babel" src="/js/tasks/delete.js?${timeStamp}"></script>`}
*/