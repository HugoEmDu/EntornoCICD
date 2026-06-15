/** @jest-environment jsdom */
const saludar = require('./app');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Pruebas de Integración y UI básica', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('Validar que el saludo sea Hola Mundo', () => {
        expect(saludar()).toBe("Hola Mundo UTN 5.0");
    });

    test('El archivo index.html contiene el mensaje correcto renderizado', () => {
        const cuerpoTexto = document.body.innerHTML;
        expect(cuerpoTexto).toContain('Hola Mundo UTN 5.0');
    });
});