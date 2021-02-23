import react,{useState} from 'react';
// import './RollDice.css'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Footer(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
        Credits😂
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
          Made with ❤ by Deepanshu Johar😂😂
          <br/>
          {props.gotCount===true?<>Played {props.tellMeCount} times</>:'Loading...'}
          </div>
        </Collapse>
      </>
    );
  }
  
export default Footer; 