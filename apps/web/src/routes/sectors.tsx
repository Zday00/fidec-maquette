import type { Route } from './+types/sectors';
import { seo } from '@/lib/seo';
import { PageHeading } from '@/components/page-heading';
import { SectorList } from '@/components/sectors/sector-list';
import { ContactBanner } from '@/components/contact-banner';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Secteurs accompagnés — FIDEC',description:'FIDEC accompagne les entreprises privées, ONG, projets de développement, institutions publiques, PME et startups au Niger.'});}
export default function Sectors(){return <><PageHeading title="Comprendre votre contexte. Accompagner vos priorités." label="Secteurs accompagnés" intro="Chaque organisation a ses contraintes et ses ambitions. Notre accompagnement s’inscrit dans cette réalité."/><SectorList/><ContactBanner/></>;}
