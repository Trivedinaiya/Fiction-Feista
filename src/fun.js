import React, { useState } from "react";
import imggg from './img/ffff.png';
import './fun.css';

export default function Home (){
    const short='At Fiction Fiesta, we are passionate about the transformative power of comics, graphic novels, and manga. Step into our virtual store, where each shelf is a treasure trove of creativity, waiting to be discovered. Whether you are a seasoned aficionado or a curious newcomer, there is something here to ignite your imagination and ignite your passion for storytelling.';

    const long='At Fiction Fiesta, we are passionate about the transformative power of comics, graphic novels, and manga. Step into our virtual store, where each shelf is a treasure trove of creativity, waiting to be discovered. Whether you are a seasoned aficionado or a curious newcomer, there is something here to ignite your imagination and ignite your passion for storytelling. Immerse yourself in our eclectic collection, where timeless classics stand alongside cutting-edge releases, and every genre has its place. From epic superhero sagas to intimate character-driven dramas, from whimsical tales of fantasy to gritty noir mysteries, there is a story here for every reader, every mood, and every moment.';

    const [read, setRead] = useState(short);
    const [btn, setBtn] = useState('Read More');

    function abc(){
        if (read===short){
          setRead(long);
          setBtn('Read Less');
  
        }
        else {
          setRead(short);
          setBtn('Read More');
        }
    }

    return (
      <> 
          <div className="ww">
            <img src={imggg} alt="imgg" />
          <div className="bbb">
          <h3>FICTION FIESTA: YOUR IMAGINATION JOURNEY STARTS  HERE</h3>
            <p>Welcome to Fiction Fiesta, where the pages burst with boundless imagination and endless adventure! Dive into our eclectic collection of comics, graphic novels, and manga, where every shelf holds a universe waiting to be explored. From timeless classics to cutting-edge releases, our store is a haven for comic enthusiasts of all stripes.</p>
            <p>{read}</p>
            <button onClick={abc}>{btn}</button>
            </div> 
            </div>
            <div className="joj">
            <h3>JOIN US AT FICTION FIESTA</h3>
            </div>
            <div className="uu">
            <div className="eef">
             <p><b>Unleash Your Imagination at Fiesta:</b></p>
            <p>Dive into a world where every book is a portal to infinite possibilities. Join our vibrant community of passionate readers and storytellers at Fiction Fiesta, where adventure awaits on every page.</p></div>
            <div className="ee">
            <p><b>Discover a Universe of Stories:</b></p>
            <p>Are you ready to embark on a journey through the limitless realms of imagination? Join the vibrant community of readers and enthusiasts at Fiction Fiesta, where every page is a new adventure waiting to be discovered.</p></div>
            <div className="ii"> 
            <p><b>Connect with Fellow Book Lovers:</b></p>
              <p>Connect with fellow book lovers, share your favorite stories, and explore our diverse collection of comics, graphic novels, and manga. Whether you're a seasoned fan or just beginning your literary journey, there's a place for you at Fiction Fiesta.</p></div>
            </div>
            
      </>
    );
}
export {Home};