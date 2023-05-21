export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","coolvetica/.DS_Store","coolvetica/Typodermic Desktop EULA 2023.pdf","coolvetica compressed hv.otf","coolvetica condensed rg.otf","coolvetica crammed rg.otf","coolvetica rg it.otf","coolvetica-rg.otf","coolvetica.rg-regular.otf","coolvetica.zip","favicon.png","geoparody.otf"]),
	mimeTypes: {".pdf":"application/pdf",".otf":"font/otf",".zip":"application/zip",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bec25e6d.js","app":"_app/immutable/entry/app.b6b72265.js","imports":["_app/immutable/entry/start.bec25e6d.js","_app/immutable/chunks/index.bb440570.js","_app/immutable/chunks/singletons.450781fa.js","_app/immutable/entry/app.b6b72265.js","_app/immutable/chunks/index.bb440570.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
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
};
