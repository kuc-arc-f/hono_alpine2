import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import type { FC } from 'hono/jsx'
import { serveStatic } from 'hono/cloudflare-workers'
//
import type { Database } from '@cloudflare/d1'
import {Layout} from './views/layout';
/* */
import testRouter from './routes/test';
import taskRouter from './routes/tasks';
/* */
import {AlpineTest} from './views/alpine1/App';
import {AlpineTest2} from './views/alpine2/App';

import {Csr1} from './views/csr1/App';
import {Csr2} from './views/csr2/App';
//
interface Env {
  DB: Database
}
//
export const app = new Hono()
//basicAuth
app.use(
  "/*",
  basicAuth({
    username: "test",
    password: "1111",
  })
);
//serveStatic
app.get('/static/*', serveStatic({ root: './' }))
app.get('/js/*', serveStatic({ root: './' }))
app.get('/styles/*', serveStatic({ root: './' }))
//
const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout title="Welcome Top">
      <h1 class="text-4xl font-bold">Hello Hono!</h1>
      <hr />
      <ul>
        {props.messages.map((message) => {
          return (<li class="my-2" >{message}!!</li>)
        })}
      </ul>
    </Layout>
  )
}
/**
* route
*/
app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
});
/* alpine */
app.get('/alpine1', async (c) => { 
  return c.html(<AlpineTest items={[]} />);
});
app.get('/alpine2', async (c) => { 
  return c.html(<AlpineTest2 items={[]} />);
});
/* */
app.get('/test/test1', async (c) => { return await testRouter.test1(c.env.DB); });
/* CSR */
app.get('/csr1', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<Csr1 items={items} />);
});
app.get('/csr2', async (c) => { 
  const items = await testRouter.get_list(c, c.env.DB);
  return c.html(<Csr2 items={items} />);
});

/**
* API
*/
app.post('/api/test/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/test/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await testRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
/* tasks */
app.post('/api/tasks/get_list', async (c) => { 
  const resulte = await taskRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/get', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.get(body, c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});
app.post('/api/tasks/create', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.create(body, c.env.DB);
  return c.json(resulte);
});
app.post('/api/tasks/delete', async (c) => { 
  const body = await c.req.json();
  const resulte = await taskRouter.delete(body, c.env.DB);
  return c.json(resulte);
});
//
app.post('/api/csr2/get_list', async (c) => { 
//  const body = await c.req.json();
//  const resulte = await testRouter.get_list(c, c.env.DB);
  return c.json({ret: "OK", data: []});
});
app.get('/api/alpine2', async (c) => { 
//  const body = await c.req.json();
  const resulte = await testRouter.test11(c, c.env.DB);
  return c.json({ret: "OK", data: resulte});
});

export default app;
/*
*/
