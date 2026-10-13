import type { Config } from '@react-router/dev/config';

// Export statique pour le bac à sable Vercel : toutes les pages sont générées au build.
export default {
	appDirectory: 'src',
	buildDirectory: 'build',
	ssr: false,
	prerender: ['/', '/le-cabinet', '/nos-expertises', '/secteurs', '/formations', '/contact'],
} satisfies Config;
