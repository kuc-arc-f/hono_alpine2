import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const Csr1: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <h1 class="text-4xl font-bold">Csr1 </h1>
        <hr />
        <div id="root"></div>
        {html`<script type="text/babel" src="/js/csr/csr1.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
*/