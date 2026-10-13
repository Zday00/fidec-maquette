import { Building2, HeartHandshake, Landmark, Sprout } from 'lucide-react';
import { sectors } from '@/data/fidec';
const icons = [Building2, HeartHandshake, Landmark, Sprout];
export function SectorList() { return <section className="section sector-grid">{sectors.map(([title, text], i) => { const Icon = icons[i]; return <article key={title}><Icon size={34} strokeWidth={1.3}/><h2>{title}</h2><p>{text}</p></article>; })}</section>; }
