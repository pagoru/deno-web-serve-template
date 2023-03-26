import { load } from '$deno/dotenv/mod.ts';

const env = await load();
Object.keys(env).forEach(key => Deno.env.set(key, env[key]));

await import('./main.ts');
