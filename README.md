# hono_alpine2

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2023/10/13 

 update  : 2023/10/15

***
### Summary

alpine.js + hono + cloudflare workers + D1, sample

***
### wrangler.toml, setting

* db setting, sample
```
name = "hono_alpine2"
main = "src/index.ts"
compatibility_date = "2023-09-01"
node_compat = true

[site]
bucket = "./public"

[vars]
#API_KEY = "123"

[[d1_databases]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = ""
database_id = ""

```

***
### blog 

***

