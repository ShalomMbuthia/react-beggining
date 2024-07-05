function Footer(){
  return(
    <footer>
      <p>$copy; {new Date().getFullYear()}
      Your website name</p>
      
    </footer> //we are returning a footer component.we can placechildren elemnts within a main element
  );
}

export default Footer;
//we use curly brackets to write javascript code in return function