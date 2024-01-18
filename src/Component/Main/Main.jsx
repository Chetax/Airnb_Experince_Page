import SubMain  from "./SubMain";
import img1 from './image1.png';
import img2 from './image2.png';
import img3 from './image3.png';
const Main = () => {
    return (<>
    <div id="carouselExample " style={{marginTop:'75px',display:'flex'}}>
    <SubMain src={img1} ratting={5} para="Life lessons with Katie Zaferes" price="From $136 "/>
    <SubMain src={img2} ratting={5} para="Life lessons with Katie Zaferes" price="From $136 "/>
    <SubMain src={img3} ratting={5} para="Life lessons with Katie Zaferes" price="From $136 "/>
  </div></>  );
}
 
export default Main;