import logo from './airbnb 1.png';
const Navbar = () => {
    return ( <>
    
  <div class="container-fluid " style={{height:"65px",boxShadow: '0px 3px 6px -6px #000000'}} >
      <div className="container " style={{height:"65px" , }}>
      <img src={logo} alt="" className='mt-3' style={{height:'35px'}} />
      </div>
  </div>

    </> );
}
 
export default Navbar;  