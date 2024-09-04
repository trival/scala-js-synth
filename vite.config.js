/** @type {import('vite').UserConfig} */
export default {
	build: {
		minify: "terser",
		terserOptions: {
			compress: {
				collapse_vars: true,
				computed_props: true,
				dead_code: true,
				hoist_funs: true,
				hoist_props: true,
				hoist_vars: true,
				inline: true,
				loops: true,
				passes: 10,
				reduce_funcs: true,
				// reduce_vars: true,
				side_effects: true,
				unsafe: true,
			},
			mangle: true,
		},
	},
};
