 "use client"
//  import { useEffect } from "react";

//  export default function App(){

// useEffect(function(){
//     if(document){
// // Get the button
// let mybutton = document.getElementsByName("top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 500) {
//     mybutton.style.display = "flex";
//     mybutton.style.justifyContent = "center";
//     mybutton.style.alignItems = "center";
//   } else {
//     mybutton.style.display = "none";
//     mybutton.style.justifyContent = "center";
//     mybutton.style.alignItems = "center";
//   }
// }
//     }
// },[])
 
// }

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const scrollFunction = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // Effect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);

  // Function to scroll to the top of the page
  const topFunction = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      id="myBtn"
      onClick={topFunction}
      style={{ display: isVisible ? 'block' : 'none', position: 'fixed', bottom: '20px', right: '30px', zIndex: '99', backgroundColor: '#000', opacity:0.6, border: 'none', borderRadius: '50%', cursor: 'pointer', padding: '15px 20px', textAlign: 'center', borderColor: '#fff', borderWidth: '2px', borderStyle:'dashed' }}
    >
          <i className="fa-solid fa-arrow-up z" style={{ color: "#fff" }} />

    </button>
  );
};

export default ScrollToTopButton;