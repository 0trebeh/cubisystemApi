const pool = require('../utils/dbconnection');
const query = require('../utils/queries');

const getPeticiones = async (req, res) => {
  const client = await pool.connect();
  try{
    const response = await client.query(query.getPeticiones);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getPeticion = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getPeticion, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createPeticion = async (req, res) => {
  const client = await pool.connect();
  try{
    const { tipoServicio, dimencion, camExt, camInt, tipoLugar, ubicacion, numComp, costo, id_usuario } = req.body;
    const response = await client.query(query.createPeticion, [
        tipoServicio, 
        dimencion, 
        camExt, 
        camInt, 
        tipoLugar, 
        ubicacion, 
        numComp, 
        costo, 
        id_usuario
    ]);
    console.log(response.rows)

    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const updatePeticion = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const { costo } = req.body;

    const response = await client.query(query.updatePeticion, [
      costo,
      id
    ]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};


const deletePeticion = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      await client.query(query.deletePeticion, [ id ]);
      res.status(200).json(`Peticion con id: ${id} deleted Successfully`);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

module.exports = {
  getPeticion,
  getPeticiones,
  createPeticion,
  updatePeticion,
  deletePeticion
};