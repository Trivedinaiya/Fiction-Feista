import React from 'react';
import img1 from "./img/imgg1.jpg"
import img9 from "./img/imgg2.jpg"
import img3 from "./img/imgg4.jpg"
import img4 from "./img/imgg5.jpg"
import img5 from "./img/imgg6.jpg"
import img6 from "./img/imgg3.jpg"
import img7 from "./img/imgg7.jpg"
import img8 from "./img/imgg8.jpg"
import img10 from "./img/imgg9.jpg"
import img12 from "./img/imgg12.jpg"
import img13 from "./img/imgg11.jpg"
import img14 from "./img/imgg17.jpg"
import img15 from "./img/imgg13.jpg"
import img16 from "./img/imgg14.png"
import img17 from "./img/imgg15.jpg"
import img18 from "./img/imgg16.jpg"
import './img.css';

export default function Book() {

            const images=[
                {
                    name: "Momo Arashima Steals the Sword of the Wind",
                    pic: img1,
                    category:"New Arrival",
                    desc:"A thrilling fantasy series about a twelve year old girl who sets out to save her Shinto goddess mother—and the world—by facing down demons intent on bringing chaos."
                }, 
                {
                    name: "The Many Masks of Andy Zhou",
                    pic: img9,
                    category:"Best Seller",
                    desc:"Creative and brave sixth grader Andy Zhou faces big changes at school and at home."
               },            
                {
                    name: "The Girl Who Lived",
                    pic: img3,
                    category:"New Arrival & Best Seller",
                    desc:"A strong character that survived a brutal slaying is less than an optimal witness to who did the crime. What will happen next is difficult to determine.",
                },
                {
                    name: "Saving Fable",
                    pic: img4,
                    category:"New Arrival",
                    desc:"Indira has been a character-in-waiting her entire life. So she can't believe her luck when she's finally chosen to travel to Fable and study at the renowned Protagonist Preparatory, a school known for producing the best heroes.",
                },
                {
                  name: "Look on the Bright Side",
                  pic: img10,
                  category:"New Arrival",
                  desc:"Lark Smith has always had a plan for her life: find a fantastic guy, create a marriage as blissful as her parents’, pop out a couple of kids and build a rewarding career as an oncologist."
              }, 
              {
                  name: "True Love and Other Impossible Odds",
                  pic: img12,
                  category:"Best Seller",
                  desc:"Pitched as Nina LaCour meets The Half of It, the story follows a first-year college student Grace Tang who invents a class algorithm that pairs people with their perfect romantic campus match, only to have everything thrown into question as she explores questions of man, ya! identity, and her past."
             },            
              {
                  name: "City of Books",
                  pic: img13,
                  category:"New Arrival & Best Seller",
                  desc:"Jo Waterstone knows what you should read next. She’s worked at Bruebaker’s Books. Her life has been shaped by the store, the bustle of customers exploring the stacks, and managing the eager staff. She can honestly say it’s the best job she’s ever had.",
              },
              {
                  name: "The Man on the Train",
                  pic: img14,
                  category:"New Arrival",
                  desc:"One man is about to have a midlife crisis like no man has ever had before. But for his wife, the nightmare is just beginning… Manhattan Assistant District Attorney Linda Haley is awakened early one morning by two police officers at the door.",
              },
              {
                name: "Redwall",
                pic: img5,
                category:"New Arrival",
                desc:"Welcome to Mossflower Wood, where the gentle mice have gathered to celebrate a year of peace and abundance. All is well…until a sinister shadow falls across the ancient stone abbey of Redwall.",
            },
            {
                name: "The Worst Witch at Sea",
                pic: img6,
                category:"Best Seller",
                desc:"Mildred’s beloved tabby cat has been deemed “unsuitable” for a witch, and is relegated to the kitchens to be a mouser. But when her class flies off on a school trip, Mildred concocts a plan to rescue Tabby — and bring him along in secret!",
            }, 
            {
                name: "Map of Flames (The Forgotten Five, Book 1)",
                pic: img7,
                category:"Best Seller",
                desc:"Fifteen years ago, eight supernatural criminals fled Estero City to make a new life in an isolated tropical hideout. Over time, seven of them disappeared without a trace, presumed captured or killed. And now, the remaining one has died.",
            },             
                {
                name: "Sweet Valley Twins: Best Friends",
                pic: img8,
                category:"New Arrival",
                desc:"Jessica and Elizabeth have always been inseparable twins, but starting middle school means a chance for new beginnings! Elizabeth is excited to organize a school newspaper, but Jessica is more interested in joining the exclusive Unicorn Club.",
            }, 
              {
                  name: "Summer Fridays",
                  pic: img15,
                  category:"New Arrival",
                  desc:"You've Got Mail for a new generation, set in the days of AOL and instant messenger banter, about a freshly engaged editorial assistant who winds up spending her 'summer Fridays' with the person she least expects",
              },
              {
                  name: "The Wealth of Shadows",
                  pic: img16,
                  category:"Best Seller",
                  desc:"An ordinary man joins a secret mission to bring down the Nazi war machine by crashing their economy in this historical thriller based on a true story.",
              }, 
              {
                  name: "Lost Ark Dreaming",
                  pic: img17,
                  category:"Best Seller",
                  desc:"The brutally engineered class divisions of Snowpiercer meets Rivers Solomon’s The Deep in this high-octane post-climate disaster novella.",
              },             
                  {
                  name: "Flawless Girls",
                  pic: img18,
                  category:"New Arrival",
                  desc:"The Soler sisters are infamous in polite society—brazen, rebellious, and raised by their fashionable grandmother who couldn’t care less about which fork goes where.",
              }, 
            ];
            function renderGallery(filteredImages) {
                const galleryDiv = document.getElementById('gallery');
                const galleryHTML = filteredImages.map((value) => (
                  `<div class="dd" key=${value.name}>
                  <h3>${value.name}</h3>
                    <img src=${value.pic} height="250px" width="200px" alt="logo" />
                    <p>Desc: ${value.desc}</p>
                    <p>Category: ${value.category}</p>
                  </div>`
                )).join('');
                galleryDiv.innerHTML = galleryHTML;
              }
            
              function All() {
                renderGallery(images);
              }
            
              function New() {
                const HotImages = images.filter(image => image.category === "New Arrival");
                renderGallery(HotImages);
              }
            
              function Best() {
                const ColdImages = images.filter(image => image.category === "Best Seller");
                renderGallery(ColdImages);
              }
              React.useEffect(() => {
                renderGallery(images);
              }, );
            
              return (
                <div >
                  <div>
                  <h1> GET YOUR FAVOURITE BOOK </h1>
                    <button onClick={All}><b>ALL</b></button>
                    <button onClick={Best}><b>Best Seller</b></button>
                    <button onClick={New}><b>New Arrival</b></button>
                  </div>
                  <div className='cc' id="gallery"> </div>
                </div>
              );
            }
           
export {Book};
        