import { Link } from "react-router-dom";

export default function navbar(){
  return (
    <nav>
      <div className="logo">MerMind</div>
      <ul>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/ideas">Ideas</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
