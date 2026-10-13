import { Link } from 'react-router';
export function PageHeading({ title, intro, label }: { title: string; intro: string; label: string }) { return <section className="page-heading"><div className="breadcrumb"><Link to="/">Accueil</Link><span>/</span>{label}</div><div className="eyebrow">FIDEC · NIAMEY, NIGER</div><h1>{title}</h1><p>{intro}</p></section>; }
