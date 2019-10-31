import React from 'react';
import picture1 from '/image1.png'
function ProofOfConcepts(){
    return(
        <div>
            <h1>Proof of Concept: </h1>
            <p>This is the placeholder for a message about the picture(hopefully family friendly)</p>
            <img src={picture1} alt={Picture1}></img>
            {/*can be easily expanded later to include more pictures and desciptions later*/}
        </div>
    );
}
export default ProofOfConcepts;