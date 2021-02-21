import react,{Component} from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import Table from './Table';

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function rangeZero(start,end){
    return Array(end-start+1).fill(false);
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
var initialState={
    onTiles:3,
    level:1,
    prevSize:2,
    boardSize:3,
    startGame:false,
    donePieces:0,
    // movesLeft:3,
    actualBoard:[],//bool array ///true at the set indices 
    playersBoard : [],//rangeZero(0,8),
    isPlaying:false
};
class Game extends Component {
    constructor(props)
    {   
        super(props);
        this.state=initialState;
    }
    startGameHandler=()=>{//just for once to start the whole game//
        this.setState({startGame:true});
    }

    playHandler=()=>{//to change the state of the game // that halt of 1 sec in the game//
    
            this.setState({play:true});
    }
    playersBoardChanger=(idx)=>{
        this.setState((prevState)=>{

            let isCorrect= prevState.playersBoard[idx]!==prevState.actualBoard[idx]? true: false ;
             console.log(isCorrect)
            if(isCorrect)
            {
                //check if he's won this game then change the state to next level
                if(this.state.donePieces+1===this.state.onTiles)
                {   
                    let newPlayersBoard=[...prevState.playersBoard];
                    console.log(newPlayersBoard)
                    newPlayersBoard[idx]=!newPlayersBoard[idx];
                    console.log("you won!!");
                   
                    return {playersBoard:newPlayersBoard,donePieces:prevState.donePieces+1,isPlaying:false};
                    ///he has done it correctly
                }
                else
                {
                    let newPlayersBoard=[...prevState.playersBoard];
                    console.log(newPlayersBoard)
                    newPlayersBoard[idx]=!newPlayersBoard[idx];
                    
                    return {playersBoard:newPlayersBoard,donePieces:prevState.donePieces+1};
                }

                
                ///
                ///else  
            }
            else{
                let newPlayersBoard=[...prevState.playersBoard];
                    newPlayersBoard[idx]=!newPlayersBoard[idx];
                    
                    return {playersBoard:newPlayersBoard,donePieces:prevState.donePieces-1};
            }
        });
    }
    fn=()=>{
        
        
        setTimeout(()=>{
            this.setState({isPlaying:true});
            } , 1500);
    
            
    }
    componentDidMount(){
        ///component did mount did two things 
        ///it changed actualBoard to some random actual board with 'onTiles' set tiles
        ///and changed playersBoard to all false board

        // console.log('stupid '+this.state.prevSize);

        this.setState((prevState,prevProps)=>{

            // let playersBoard
            let newPlayersBoard=rangeZero(0,prevState.boardSize ** 2 -1);
            // console.log('newPlayersBoard '+newPlayersBoard)
            let temp_arr=range(0,prevState.boardSize ** 2 -1);
            // console.log('temp_arr '+temp_arr)
            let temp_arr2=shuffle(temp_arr);//from 0 to 8 correct
            // console.log('temp_arr2 '+temp_arr2)
            let newActualBoard=rangeZero(0,prevState.boardSize ** 2 -1);
 
            for(let i=0;i<prevState.onTiles;i++ )
            {
                newActualBoard[temp_arr2[i]]=true;                
            }
            //we have to return the board variable with the random indices true 
            console.log('newActualBoard '+newActualBoard)
            return {actualBoard:newActualBoard,playersBoard:newPlayersBoard,donePieces:0};
        });
    }
    render(){
        return (<>
        hello!! from Game compo...
        <h3>
           
            {/* {this.state.isPlaying===true?'':this.showActualBoard()} */}
            {/* <h3 onClick={this.startGameHandler}>click to start the Game!!</h3> */}

            {
            // this.state.startGame===true?
            this.state.isPlaying===false ?
                (<><Table board={this.state.actualBoard} boardSize={this.state.boardSize} isPlaying={this.state.isPlaying}/>
                    {this.fn()}
                    </>
                )     :
            <Table playersBoardChanger={this.playersBoardChanger} board={this.state.playersBoard} boardSize={this.state.boardSize} isPlaying={this.state.isPlaying}/>
            
            // :<>LETS PLAY!!</>
            }
        </h3></>)
    }
}

export default Game;


//    incCounter=()=>{
//        this.setState((prevState)=>{
//         //    let tempBoard: Array(prevState.boardSize+1).fill(0).map(row => new Array(prevState.boardSize+1).fill(1) )
//         return({boardSize:prevState.boardSize +1, board:Array(prevState.boardSize+1).fill(0).map(row => new Array(prevState.boardSize+1).fill(1) )});
//        });

//    }
    // componentDidMount(){
    //     this.setState((prevState)=>{
    //                 //    let tempBoard: Array(prevState.boardSize+1).fill(0).map(row => new Array(prevState.boardSize+1).fill(1) )
    //                 return({boardSize:prevState.boardSize +1, board:Array(prevState.boardSize+1).fill(0).map(row => new Array(prevState.boardSize+1).fill(1) )});
    //                });
    // }
    