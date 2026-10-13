import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation } from '@/data/fidec';
export function SiteHeader() {
 const [open, setOpen] = useState(false);
 return <header className="site-header"><Link to="/" className="brand" aria-label="FIDEC — Accueil">FIDEC<span>Fiduciaire d’Audit & Consulting</span></Link><button className="menu-toggle" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav open' : 'nav'} aria-label="Navigation principale">{navigation.map(([url, label]) => <NavLink key={url} to={url} end onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="button small" to="/contact#formulaire" onClick={() => setOpen(false)}>Prendre rendez-vous <ArrowUpRight size={15}/></Link></nav></header>;
}
