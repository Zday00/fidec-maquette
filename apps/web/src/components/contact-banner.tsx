import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
export function ContactBanner() { return <section className="contact-banner"><div><div className="eyebrow white">CONSTRUISONS LA SUITE ENSEMBLE</div><h2>Parlons de vos enjeux.</h2></div><Link className="button" to="/contact#formulaire">Nous contacter <ArrowUpRight size={19}/></Link></section>; }
