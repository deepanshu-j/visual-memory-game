import react from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

function Lost(props){
   
   return(
    <Jumbotron style={{backgroundColor: "#f2f3fe"}}>
    <h3>YOU LOST😢😢</h3>
    <Button variant="outline-dark" onClick={props.restartHandler}>Restart Game!!</Button>
  </Jumbotron>
   );
   
//    return (<div>
//         YOU LOST😢😢

//         <div >
//             <Button onClick={props.restartHandler}>Restart Game!!</Button>
//         </div>
//     </div>);
}
export default Lost;