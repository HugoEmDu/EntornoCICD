const saludar = require('./app');

test('Validar que el saludo sea Hola Mundo', () => {
    expect(saludar()).toBe("Hola Mundo desde mi notebook");
});