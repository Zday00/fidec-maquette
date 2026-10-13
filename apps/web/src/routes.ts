import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('le-cabinet', 'routes/cabinet.tsx'),
	route('nos-expertises', 'routes/expertises.tsx'),
	route('secteurs', 'routes/sectors.tsx'),
	route('formations', 'routes/formations.tsx'),
	route('contact', 'routes/contact.tsx'),
] satisfies RouteConfig;
