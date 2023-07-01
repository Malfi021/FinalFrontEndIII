import React from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App';
import Card from "../Components/Card";
import Form from "..Components/Form";

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
    });

    test("Enviar el formulario con datos válidos", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Form />);

    const nombreInput = getByPlaceholderText("Nombre");
    const emailInput = getByPlaceholderText("Email");
    const enviarButton = getByText("Enviar");

    fireEvent.change(nombreInput, { target: { value: "Pepe Lopez" } });
    fireEvent.change(emailInput, { target: { value: "pepelopez@example.com" } });
    fireEvent.click(enviarButton);

    expect(queryByText("Gracias, Pepe Lopez!! Te contactaremos cuanto antes vía mail")).toBeInTheDocument();
    expect(queryByText("Por favor chequea que la información sea correcta")).toBeNull();
    });
});


