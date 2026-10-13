import { ScanLine, Calculator, ChartNoAxesCombined, Scale, Landmark, Check } from 'lucide-react';
import { expertises } from '@/data/fidec';
const icons = [ScanLine, Calculator, ChartNoAxesCombined, Scale, Landmark];
export function Services() { return <section className="section services">{expertises.map((item, i) => { const Icon = icons[i]; return <article id={`expertise-${i+1}`} key={item.title}><div className="service-icon"><Icon size={32} strokeWidth={1.3}/><span>0{i+1}</span></div><div><h2>{item.title}</h2><p>{item.text}</p><ul>{item.services.map(service => <li key={service}><Check size={16}/>{service}</li>)}</ul></div></article>; })}</section>; }
