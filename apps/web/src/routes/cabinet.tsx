import type { Route } from './+types/cabinet';
import { seo } from '@/lib/seo';
import { PageHeading } from '@/components/page-heading';
import { Presentation } from '@/components/cabinet/presentation';
import { ContactBanner } from '@/components/contact-banner';
export function meta({ matches, location }: Route.MetaArgs) { return seo({matches, location}, {title:'Le cabinet — FIDEC',description:'Découvrez FIDEC, cabinet d’expertise comptable, d’audit et de conseil à Niamey, sa mission et ses valeurs.'}); }
export default function Cabinet() { return <><PageHeading title="L’exigence, au cœur de notre métier." label="Le cabinet" intro="Un cabinet ancré au Niger, une approche fondée sur la rigueur, l’intégrité et la proximité."/><Presentation/><ContactBanner/></>; }
