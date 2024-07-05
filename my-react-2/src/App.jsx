import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
//In app.jsx we only have the ability to return one component so in the case of 2,we use afragment
function App(){
  return(
    <>
     <Header/>
     <Food/>
     <Footer/>
     </>
  );
}

export default App;
//i need a set of parenthesis to return a certain component