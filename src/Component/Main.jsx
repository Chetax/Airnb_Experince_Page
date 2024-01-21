import SubMain  from "./MainFold/SubMain";
import img1 from "./Images/image1.png";
import img2 from "./Images/image2.png";
import img3 from "./Images/image3.png";

const Main = () => {

  console.log(process.env.PUBLIC_URL);
  const data=[
    {
     key:1,
     image:img1,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:2,
     image:img2,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
    {
      key:3,
     image:img3,
     ratting:5,
     para:"Life lessons with Katie Zaferes",
     price:"From $136 "
    },
  ]
    return (<>
<div id="carouselExample" style={{ marginTop: '75px', display: 'flex', overflowX: 'auto' }}>
  {data.map((data) => {
    return <SubMain key={data.key} src={data.image} ratting={data.ratting} para={data.para} price={data.price} />;
  })}


  </div>
  </>  );
}
 
export default Main;