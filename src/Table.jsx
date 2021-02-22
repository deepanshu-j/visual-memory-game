import react from 'react';
import './Table.css';
import blackSquare from './square-solid-black.svg'
import blueSquare from './square-solid.svg'
class Table extends react.Component{
    constructor(props)
    {
        super(props);
        this.state={
            board:props.board,
            boardSize:props.boardSize
        }
    }
    componentDidMount(){
        this.setState((prevState,prevProps)=>{
            return ({board:prevProps.board,boardSize:prevProps.boardSize });
           });
    }
    flipHandler=(evt,sIndex)=>{
      // console.log(sIndex);
      this.props.playersBoardChanger(sIndex);
      // console.log(evt);
    }
    noFlip=()=>{
      console.log('no Flip');
    }
    render(){
    return (<div className="outer-conatiner">

        {/* {console.log(this.props.board)} */}
          
          <ol  style={{'--board-size':this.props.boardSize}} className="table-container">
            {this.props.board.map((subItems, sIndex) => {

              //using index as key as surely there wont be any rearrangement in the order//
              // return <div key={sIndex} onClick={this.props.play===true?this.flipHandler:null}>{subItems===false?0:1}</div>;
              return <text key={sIndex} onClick={this.props.isPlaying===true?((evt) => this.flipHandler(evt,sIndex)):this.noFlip}>
                { subItems===false ? 
                  <img className="img-container" src={blackSquare} alt="blackBox" />
                    :
                    <img className="img-container" src={blueSquare} alt="blueBox" />
                }
                
                </text>;
              
              
              // if(sIndex % this.state.boardSize===0 )
              // return(<><div></div><> {subItems===false?0:1}</> </>);
              // //else
              // return (<> {subItems===false?0:1} </>);

              })
            }
          </ol>
    
    </div>);

    }

} 

export default Table;