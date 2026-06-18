/** @jest-environment jsdom */
const { saludar, inyectarSaludo } = require('./app');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Pruebas de Integración y UI básica', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    test('Validar que el saludo sea Hola Mundo', () => {
        expect(saludar()).toBe("Hola Mundo UTN 9.0");
    });

    test('El archivo index.html contiene el mensaje correcto renderizado', () => {
        inyectarSaludo();
        const textoH1 = document.getElementById('contenido').textContent;
        expect(textoH1).toContain('Hola Mundo UTN 9.0');
    });

    test('La función inyectarSaludo no falla si el elemento H1 no existe', () => {
        document.body.innerHTML = '';
        expect(() => inyectarSaludo()).not.toThrow();
    });
});