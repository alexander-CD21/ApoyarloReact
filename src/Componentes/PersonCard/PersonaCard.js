function PersonaCard( props ) {
    
     return( 
        <div>
           <h1>{props.nombre[0].firstName},{props.nombre[0].lastName}</h1>
            <h3>Age: {props.nombre[0].age}</h3>
            <h3>hair Color : {props.nombre[0].hairColor} </h3>
            <button  onClick={() => props.actualizar()} >
                Birthday Button for Jane Doe
            </button>
            
           <h1>{props.nombre[1].firstName},{props.nombre[1].lastName}</h1>
            <h3>Age: {props.nombre[1].age}</h3>
            <h3>hair Color : {props.nombre[1].hairColor} </h3>
            <button  onClick={() => props.actualizar1() } >
                Birthday Button for John Smith
            </button>
        </div>
    )
}

export default PersonaCard;






{/*
const PersonCard = ( props ) => {
    
    let aumentar = (props) => {
        props.age = props.age + 1 ;
      }
    
    return(
        <div>
            <h1>
                {props.firstName},{props.lastName}
            </h1>
            <h2>
            Age :{props.age}
            </h2>
            <h2>
            Hair Color: {props.hairColor}
            </h2>
            <div>
                <button onClick={this.aumentar} > 
                    Birthday Button for {props.firstName} {props.lastName}
                </button>
            </div>
        </div>
    );
}
*/}