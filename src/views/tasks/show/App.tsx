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
            <div id="root"></div>
            {html`
            <script type="text/babel">
            let TaskItemId = ${props.item.id};
            </script>`
            } 
            {html`<script type="text/babel" src="/js/tasks/show.js?${timeStamp}"></script>`}  
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {html`<script type="text/babel" src="/js/tasks/delete.js?${timeStamp}"></script>`}
        </div>
    </Layout>
)
}