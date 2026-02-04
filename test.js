// test.js
const { execSync } = require('child_process');

try {
    const stdout = execSync('node hola.js').toString().trim();
    if (stdout === 'hola mundo!') {
        console.log("✅ Test pasado");
        process.exit(0);
    } else {
        throw new Error(`Salida inesperada: ${stdout}`);
    }
} catch (error) {
    console.error("❌ Test fallido:", error.message);
    process.exit(1); // Importante: salir con código 1 para que GitHub Actions detecte el fallo
}