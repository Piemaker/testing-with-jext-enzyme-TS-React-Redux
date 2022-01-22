import React,{useRef,useEffect} from 'react'
import Typed from "typed.js";
export default function Header() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

    useEffect(() => {
    const options = {
      strings: [
        "<b>React-Redux</b>",
        "<i>Testing with Jest&Enzyme</i>",
        "<b><i>Typescript</i></b>",
      ],
      typeSpeed: 60,
      backSpeed: 50,
    };

    // elRef refers to the <h1> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <h1 id="myHeader" className="display-3" ref={el} />;
}


