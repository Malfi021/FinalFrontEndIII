import React, {render, screen} from '@testing-library/react';
import App from '../App';
import Card from "../Components/Card";

describe("Probando codigo de App", () =>{
    test("Boton Cambiar Tema", () => {
    render(<App />);
    const componente = screen.getByRole("Cambiar Tema");
    expect(componente).toBeInTheDocument();
});

 test('ver boton agregar favorito', () => { 
    render(<Card />);
    const LinkElement = screen.getByText("Agregar Favorito");
    expect(LinkElement).toBeInTheDocument();
 })

});


