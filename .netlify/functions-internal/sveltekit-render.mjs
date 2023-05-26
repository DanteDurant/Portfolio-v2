import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","coolvetica-rg.woff2","favicon.png","geoparody.otf"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".otf":"font/otf"},
	_: {
		client: {"start":"_app/immutable/entry/start.8092284b.js","app":"_app/immutable/entry/app.c190479a.js","imports":["_app/immutable/entry/start.8092284b.js","_app/immutable/chunks/index.163151cb.js","_app/immutable/chunks/singletons.0aabd740.js","_app/immutable/entry/app.c190479a.js","_app/immutable/chunks/index.163151cb.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/intro",
				pattern: /^\/intro\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
