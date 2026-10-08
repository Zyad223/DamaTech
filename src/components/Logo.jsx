import logoUrl from '../assets/logo.png';

export default function Logo({ alt = 'شعار داماتيك DAMA Tech Center' }) {
  return <img className="logo" src={logoUrl} alt={alt} />;
}
