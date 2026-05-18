const saludar = require('./app');

test('Validar que el saludo sea Hola Mundo', () => {
    expect(saludar()).toBe("Aguante la Formula 1");
});