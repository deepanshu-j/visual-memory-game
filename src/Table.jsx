import react from 'react';
import './Table.css';

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
    return (<>

        {/* {console.log(this.props.board)} */}
          
          <ol  style={{'--board-size':this.props.boardSize}} className="table-container">
            {this.props.board.map((subItems, sIndex) => {

              //using index as key as surely there wont be any rearrangement in the order//
              // return <div key={sIndex} onClick={this.props.play===true?this.flipHandler:null}>{subItems===false?0:1}</div>;
              return <text key={sIndex} onClick={this.props.isPlaying===true?((evt) => this.flipHandler(evt,sIndex)):this.noFlip}>{subItems===false?0:1}</text>;
              
              
              // if(sIndex % this.state.boardSize===0 )
              // return(<><div></div><> {subItems===false?0:1}</> </>);
              // //else
              // return (<> {subItems===false?0:1} </>);

              })
            }
          </ol>
    
    </>);

    }

} 

export default Table;