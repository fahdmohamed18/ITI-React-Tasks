import React, { useState } from 'react'

const Home = () => {
    //return  state , function         intial value -> 0
    const [Counter , setCounter] = useState(0)

    //  state       function
    // [undefined , f]
    console.log(Counter)


    const x = "fahd Mohamed"

    const cls = "test2"

    // let counter = 0;
    // x --> h1 scope
    //select element => inner html => x => scope    (js methos)

    // react has own dom
    //binding -> ربط ->  between js - jsx(html code)    add {}

    // binding => {} => jsx any where
    // {} -> js ->  one line 
    
    function inc(){
        // function setCounter => change value state + rerender
        setCounter(Counter+1)
    }
/*     event in jsx 

    1- open tag => onclick 
    2- addevent => dom method => 


    event
    html -> small            calling function
    jsx  -> camel case       ref => add onclick => convert addevent listener
 

*/


/*  re render -> display
component

class => state   --> store data -> html    -- طريقه زمان
state => rerender html > display

function => stateless
static => function => footer or navbar
حاليا قدرو يخلو الفانكشن تكون ديناميك تعرض داتا عن طريق hooks
hooks => v16.8 => خطاف


hook => function => begin with use
in scope function component


state => useState()
 */


  return (
            // or ={cls + " padding"}
            // or ={`padding test2`}
    <div className={`padding ${cls}`}>  
    <i className='fa-solid fa-spinner fa-spin fa-7x'></i> 
      <h1 className='bg-danger'>Hi ya {x}</h1>
      <h2>Counter : {Counter}</h2>
      <button onClick={inc}>click</button>
    </div>
  )
}

export default Home
