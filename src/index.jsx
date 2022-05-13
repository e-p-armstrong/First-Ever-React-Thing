import React from 'react';
import ReactDOM from 'react-dom/client';

//Welcome to my first ever react site thing! Enjoy your stay.

function AComponent (props){
    return (<div className="siteWrapper">
        <h1>This is a {props.adjective} React site</h1>
        <p>This is some content. {props.noun}s are better than {props.otherNoun}s</p>
        <h4>You have been here for roughly {props.time} seconds.</h4>
    </div>)
    
}


async function reviseSite(){
    let adjective;
    let noun1;
    let noun2;
    const domContainer = document.getElementById('root');
    const root = ReactDOM.createRoot(domContainer);
    let [initAdjective,initNoun1,initNoun2] = ["ever-changing","Evan","Everyone Else"] // /s, obviously (NOT! HAHAHAHAHA (/s again))
    let timer = 0;
    root.render(<AComponent adjective={initAdjective} noun={initNoun1} otherNoun={initNoun2} time={timer}/>)
    
    while(true){
        const wordArray = await words();
        [adjective,noun1,noun2] = wordArray; //woot for destructured assignment!
        timer +=1;
        const element = <AComponent adjective={adjective} noun={noun1} otherNoun={noun2} time={timer}/>;
        root.render(element);
    }
}


let words = () =>{
    return new Promise((resolve,reject) => {
        let adjective = ["magnificent", "really goddamn basic", "test"][Math.floor(Math.random()*3)];
        let noun1     = ["Squirrel", "Donkey","T-Rexe"][Math.floor(Math.random()*3)]
        let noun2     = ["buffalo","ferret"][Math.floor(Math.random()*2)]
        setTimeout(()=>{
            resolve([adjective,noun1,noun2])
        },1000)
    })
    

}


reviseSite()