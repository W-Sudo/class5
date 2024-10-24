import {useState} from "react";
export default function App() {
    const image1={
        src:"images/pic1.jpg",
        alt:"Closeup of a human eye"
    }
    const image2={
        src:"images/pic2.jpg",
        alt:"Rock that looks like a wave"
    }
    const image3={
        src:"images/pic3.jpg",
        alt:"Purple and white pansies"
    }
    const image4={
        src:"images/pic4.jpg",
        alt:"Section of wall from a pharoah's tomb"
    }
    const image5={
        src:"images/pic5.jpg",
        alt:"Large moth on a leaf"
    }
    const [mainImage,setMainImage]=useState(image1);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];
    const [isDark,setIsDark]=useState(true);
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={mainImage.src}
            alt={mainImage.alt}
          />
          <div className="overlay" style={isDark?{}:{backgroundColor:'rgba(0, 0, 0, 0.5)'}}></div>

          {isDark?(<button className="dark" onClick={()=>setIsDark(!isDark)}>Darken</button>)
          :(<button className="light" onClick={()=>setIsDark(!isDark)}>Lighten</button>)}
        </div>
        <div className="thumb-bar">
            {images.map((image,i)=>{
                return (
                <div key={i} onClick={(e)=>setMainImage(image)}><img src={image.src} alt={image.alt}/></div>)
            })}
        </div>
      </>
    );
}