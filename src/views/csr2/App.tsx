import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const Csr2: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout>
      <div>
        <div id="root"></div>
        {html`<script type="text/babel" src="/js/csr/csr2.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
*/