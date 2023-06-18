import { webServe } from 'denoWebServe';

await webServe({
	port: 8080,
	indexFileName: 'main.tsx',
	minify: false,
	externals: [],
	envs: ['ENVIRONMENT']
});