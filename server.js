import { serve } from "https://deno.land/std@0.217.0/http/server.ts";
import { existsSync } from "https://deno.land/std@0.217.0/fs/mod.ts";
import { basename, extname } from "https://deno.land/std@0.217.0/path/mod.ts";

const server = serve({ port: 8000 });

for await (const req of server) {
  let path = `${Deno.cwd()}/build${req.url}`;

  if (req.url === '/') {
    path = `${Deno.cwd()}/build/index.html`;
  } else if (!extname(req.url)) {
    path = `${Deno.cwd()}/build${req.url}/index.html`;
  }

  try {
    const data = await Deno.readFile(path);
    req.respond({ body: data });
  } catch (error) {
    if (existsSync(`${Deno.cwd()}/build/index.html`)) {
      const data = await Deno.readFile(`${Deno.cwd()}/build/index.html`);
      req.respond({ body: data });
    } else {
      req.respond({ status: 404 });
    }
  }
}