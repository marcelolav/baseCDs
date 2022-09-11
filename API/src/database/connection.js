import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };

/*

Resultado de consulta a tabla ListadoDVD en JSON (Estructura)
{
    "id": 1,
    "DVD": 28,
    "nombreCD": "00 charleston.mp3",
    "nombreCancion": "00 charleston",
    "tamanoBytes": 2254599,
    "fechaGrabacion": "2006-05-07T02:46:58.000Z",
    "tamanoMegaBytes": 2.150153160095215,
    "estilo": null
},

*/