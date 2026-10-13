import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Hero } from '@/components/home/hero';
import { ExpertiseOverview } from '@/components/home/expertise-overview';
import { Trust } from '@/components/home/trust';
import { TrainingPreview } from '@/components/home/training-preview';
import { ContactBanner } from '@/components/contact-banner';
export function meta({ matches, location }: Route.MetaArgs) { return seo({ matches, location }, { title: 'FIDEC — Audit, expertise comptable et conseil au Niger', description: 'FIDEC, Fiduciaire d’Audit & Consulting à Niamey : audit, expertise comptable et conseil pour les entreprises, ONG et institutions au Niger.' }); }
export default function HomePage() { return <><Hero/><ExpertiseOverview/><Trust/><TrainingPreview/><ContactBanner/></>; }
