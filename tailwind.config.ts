import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                earth: {
                    50: '#ecfdf5', // emerald-50
                    100: '#d1fae5', // emerald-100
                    200: '#a7f3d0', // emerald-200
                    300: '#6ee7b7', // emerald-300
                    400: '#34d399', // emerald-400
                    500: '#10b981', // emerald-500 (Primary)
                    600: '#059669', // emerald-600
                    700: '#047857', // emerald-700
                    800: '#065f46', // emerald-800
                    900: '#064e3b', // emerald-900
                    950: '#022c22', // emerald-950
                },
                sand: {
                    50: '#f8fafc', // slate-50
                    100: '#f1f5f9', // slate-100
                    200: '#e2e8f0', // slate-200
                    300: '#cbd5e1', // slate-300
                    400: '#94a3b8', // slate-400
                    500: '#64748b', // slate-500
                    600: '#475569', // slate-600
                    700: '#334155', // slate-700
                    800: '#1e293b', // slate-800
                    900: '#0f172a', // slate-900
                    950: '#020617', // slate-950
                }
            }
        },
    },
    plugins: [],
};
export default config;
