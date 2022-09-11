import { getConnection, querys, sql } from "../database";

export const getDiscos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllDiscos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getDiscoByDVD = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("dvd", req.params.dvd)
      .query(querys.getDiscoByDVD);
    return res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const createNewDisco = async (req, res) => {
  const { DVD, nombreCD, nombreCancion, estilo } = req.body;

  // validating
  if (DVD == null || nombreCD == 0 || nombreCancion == null ||  estilo == null) {
    return res.status(400).json({ msg: "Error:  Faltan campos que se requieren" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("DVD", sql.Int, DVD)
      .input("nombreCD", sql.Text, nombreCD)
      .input("nombreCancion", sql.Text, nombreCancion)
      .input("estilo", sql.Text, estilo)
      .query(querys.addNewDisco);

    res.json({ DVD, nombreCD, nombreCancion, estilo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getDiscoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getDiscoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteDiscoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteDiscoByID);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);
    
    return res.sendStatus(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalCanciones = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalCanciones);
  res.json(result.recordset[0][""]);
};

export const updateDiscoById = async (req, res) => {
  const { DVD, nombreCD, nombreCancion, estilo } = req.body;

  if (DVD == null || nombreCD == null || nombreCancion == null || estilo == null) {
    return res.status(400).json({ msg: "Error:  Faltan campos que se requieren" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("DVD", sql.VarChar, DVD)
      .input("nombreCD", sql.Text, nombreCD)
      .input("nombreCancion", sql.Int, nombreCancion)
      .input("estilo", sql.Text, estilo)
      .input("id", req.params.id)
      .query(querys.updateDiscoById);
    res.json({ DVD, nombreCD, nombreCancion, estilo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};