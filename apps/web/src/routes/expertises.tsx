import type { Route } from './+types/expertises';
import { seo } from '@/lib/seo';
import { PageHeading } from '@/components/page-heading';
import { Services } from '@/components/expertises/services';
import { ContactBanner } from '@/components/contact-banner';
export function meta({matches,location}:Route.MetaArgs) {return seo({matches,location},{title:'Nos expertises — FIDEC',description:'Les cinq pôles FIDEC : audit, expertise comptable, Management Consulting, assistance fiscale, juridique et sociale, et missions de mandataires.'});}
export default function Expertises(){return <><PageHeading title="Des expertises au service de vos enjeux." label="Nos expertises" intro="Cinq pôles complémentaires pour vous accompagner avec méthode et indépendance."/><Services/><ContactBanner/></>;}
