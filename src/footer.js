import { Link } from 'react-router-dom';
import './footer.css';
 function Footer(){
return (
<>
<div className="ft">
<div className="foot">
<div><Link className="xyzz" to="/"> Home </Link></div>
<div><Link className="xyzz" to="/books"> Books </Link></div>
<div><Link className="xyzz" to="/AboutUs"> About_Us </Link></div>
<div><Link className="xyzz" to="/contact"> Contact </Link></div>
</div>
<div className='contac'>
<p>Contact no: 9978641322</p>
<p>Copyright © 2024 . Fictionfiesta.com.</p>
    <p>All Rights Reserved.</p>
</div>
<div className='emai'>
<p>Email: fictionfiesta@gmail.com</p>
<p>Address: Mangal Murti Flats, </p>
<p> Pethapur</p>
</div>
</div>
</>
);
};
export default Footer;