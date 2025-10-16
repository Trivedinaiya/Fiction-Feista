import React from "react";
import './AboutUs.css';
import mg from './img/a1.png';
import mg1 from './img/a2.png';
import mg2 from './img/a3.png';
import mg3 from './img/a4.png';
export default function Aboutt() {
  return(
    <>
    <div>
      <h1>Welcome to Feista Online Book Store, your premier destination for fiction enthusiasts!</h1>
    </div>
    <div class="im"> 
        <div className="zzz">
            <img src={mg} alt=""/>
            </div>
            <h4>At Feista, we understand the allure of fiction — the power to escape reality, explore new worlds, and empathize with characters both familiar and fantastical. Nestled in the heart of the digital realm, we've crafted a virtual sanctuary where fiction aficionados can immerse themselves in captivating stories, discover hidden gems, and connect with fellow literary explorers.</h4>
      </div>
      <div class="im1">  
      <div><h4>Our journey began with a shared passion for fiction and a vision to create a haven where the magic of storytelling knows no bounds. Founded by a team of dedicated bibliophiles and tech enthusiasts, Feista is the culmination of our commitment to celebrating the art of fiction and fostering a vibrant community of readers in the digital age.</h4></div>
      <div className="yyy">
            <img src={mg2} alt=""/>
            </div>  
        </div>
        <div class="im2">  
        <div className="sss">
              <img src={mg1} alt=""/>
              </div> 
              <div><h4>At Feista, we take pride in offering a meticulously curated selection of fiction books, ranging from timeless classics to contemporary masterpieces. Whether you crave the pulse-pounding excitement of a thriller, the heartwarming charm of a romance, the mind-bending twists of science fiction, or the immersive allure of fantasy realms, our virtual shelves are brimming with treasures waiting to be discovered.</h4>
              </div>
                      
            </div>
            <div class="im3"> 
            <div><h4>But Feista is more than just a bookstore — it's a sanctuary for literary exploration, imagination, and connection. Through our innovative features, personalized recommendations, and immersive reading experiences, we aim to make every visit to our online store a journey of discovery and delight for fiction lovers worldwide.</h4></div>
            <div className="ttt">
              <img src={mg3} alt=""/>
                  </div> 
            </div>  
            </>
  );
};
export {Aboutt};
