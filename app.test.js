const saludar = require('./app');

test('Validar que el saludo sea Hola Mundo', () => {
    expect(saludar()).toBe("Todo funcionando OK");
});