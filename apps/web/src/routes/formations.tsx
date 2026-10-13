import type { Route } from './+types/formations';
import { seo } from '@/lib/seo';
import { PageHeading } from '@/components/page-heading';
import { TrainingDetails } from '@/components/training/training-details';
import { SubmissionForm } from '@/components/submission-form';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Formations — Gestion financière des ONG | FIDEC',description:'Gestion financière des ONG – Les fondamentaux : du 25 au 27 novembre 2026 à Niamey, 200 000 FCFA par personne. Découvrez le programme et demandez votre inscription.'});}
export default function Formations(){return <><PageHeading title="Renforcer les compétences. Structurer la pratique." label="Formations" intro="La formation professionnelle FIDEC accompagne le développement de compétences concrètes en gestion financière."/><TrainingDetails/><div className="section soft"><SubmissionForm training/></div></>;}
