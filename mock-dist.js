/ secrets-example.js
 
// 1. Token de GitHub (ficticio)
const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
 
// 2. Clave de acceso de AWS (ficticia)
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
 
// 3. Contraseña de base de datos
const DB_PASSWORD = "SuperSecretaP4ssw0rd!";
 
// 4. Token de API de Stripe (ficticio)
const STRIPE_API_KEY = "sk_test_4eC39HqLyjWDarjtT1zdp7dc";
 
// 5. Cadena de conexión completa (ficticia)
const CONNECTION_STRING = "postgres://user:SuperSecretaP4ssw0rd!@db.example.com:5432/mydb";
 
module.exports = {
  GITHUB_TOKEN,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  DB_PASSWORD,
  STRIPE_API_KEY,
  CONNECTION_STRING
};
