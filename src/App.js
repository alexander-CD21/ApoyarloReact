import React from 'react';
import './App.css';
import PersonCard from './Componentes/PersonCard/PersonaCard';

class App extends React.Component{
  constructor( props ) {
    super( props );
    this.state = {
        nombre : [{
            firstName : "Doe",
            lasrName : "Jane",
            age :45,
            hairColor : "Black" 
        },
        {
            firstName : "Smith",
            lasrName : "John",
            age :88,
            hairColor : "Brown"   
        }]
    };

  }
  actualizarEdad1 = () =>{
    let actualizar = this.state.nombre;
    actualizar[0].age = actualizar[0].age + 1;
    this.setState( {nombre : actualizar});
          
    
  } 

  actualizarEdad2 = () => {
    let actualizar1 = this.state.nombre;
    actualizar1[1].age = actualizar1[1].age+1;
    this.setState( { nombre : actualizar1});
  }

  render(){
    return (
      <div>
        <PersonCard nombre={this.state.nombre} actualizar={this.actualizarEdad1}  actualizar1={this.actualizarEdad2} />

      </div>
    );

  }
}
export default App;
















