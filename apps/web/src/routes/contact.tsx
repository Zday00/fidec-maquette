import type { Route } from './+types/contact';
import { seo } from '@/lib/seo';
import { PageHeading } from '@/components/page-heading';
import { SubmissionForm } from '@/components/submission-form';
export function meta({matches,location}:Route.MetaArgs){return seo({matches,location},{title:'Contact — FIDEC à Niamey',description:'Contactez FIDEC pour une demande d’information, un projet d’audit, d’expertise comptable ou de conseil au Niger.'});}
export default function Contact(){return <><PageHeading title="Parlons de vos enjeux." label="Contact" intro="Vous souhaitez échanger avec le cabinet ou demander un rendez-vous ? Présentez-nous votre besoin."/><div className="section contact-layout"><SubmissionForm/><aside><div className="eyebrow">FIDEC</div><h2>À vos côtés,<br/>à Niamey.</h2><p>Fiduciaire d’Audit & Consulting<br/>Niamey, Niger</p><div className="contact-placeholders"><p>Adresse précise : À compléter</p><p>Téléphone : À compléter</p><p>E-mail : À compléter</p></div><p className="subtle">Les rendez-vous sont convenus directement avec le cabinet. Aucun système de réservation automatique n’est intégré.</p></aside></div></>;}
