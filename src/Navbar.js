import { Link } from "react-router-dom";
import imgg from "./img/lo.png"
import './Navbar.css'
function Navbar(){
    const logo=[
        {
            id: 1,
            pic: imgg,
        }, 
    ]
return (
<div className='abc'>
    <div className="gg">{logo.map((value)=>(
        <img src={value.pic} height="400px" width="50px" alt="logo"/>
    ))}</div>
    <div className="fof"><p><b>FICTION FIESTA</b></p></div>
<div>
<Link className="xyz" to="/"> Home </Link>
<Link className="xyz" to="/books"> Books </Link>
<Link className="xyz" to="/AboutUs"> About </Link>
<Link className="xyz" to="/contact"> Contact </Link>
</div>
</div>
);
};
export default Navbar;
  
