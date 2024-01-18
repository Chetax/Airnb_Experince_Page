import image1 from './image1.png';
const SubMain = (props) => {
    return ( <>
    <div className="container ">
        <div className="row">
            <div className="col-3"></div>
            <div className="col-7">
            <img src={props.src} style={{height:'50vh',width:'20vw'}} alt="" />
        <p style={{fontFamily:'sans-serif'}} className="rating">⭐{props.ratting}.0</p>
        <p  style={{fontFamily:'sans-serif' ,fontSize:'15px'}} className="info">{props.para}
</p>

        <p className="price"><span style={{fontWeight:'bold'}}>{props.price}</span>/ person;
</p>

            </div>
            <div className="col-2"></div>
        </div>
        
    </div>
    </> );
}
 
export default SubMain;