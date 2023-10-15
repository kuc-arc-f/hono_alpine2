import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../../layout';
//
export const TaskCreate: FC = (props) => {
    const timeStamp = Date.now();
    return (
    <Layout title="TaskCreate">
        <div>
            <h1 class="text-4xl font-bold">Create</h1>
            <hr class="my-2" />
            <label>Title:</label>
            <input type="text" id="title" 
            class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"/>
            <hr />
            <button id="save" class="btn-purple ms-2 my-2">Save</button>
            {html`<script src="/js/tasks/create.js?${timeStamp}"></script>`}        
        </div>
    </Layout>
    )
}