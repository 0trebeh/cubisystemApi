const pool = require('../utils/dbconnection');
const query = require('../utils/queries');

const getUser = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getUser, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getLogin = async (req, res) => {
  const client = await pool.connect();
  try{
    const { email } = req.body;
    const response = await client.query(query.getLogin, [email]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createUser = async (req, res) => {
  const client = await pool.connect();
  try{
    const { nombre, telefono, email, password } = req.body;
    const response = await client.query(query.createUser, [
      nombre, 
      telefono, 
      email, 
      password, 
      false
    ]);

    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const updateUser = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const { nombre, telefono } = req.body;

    const response = await client.query(query.updateUser, [
      nombre, 
      telefono,
      id
    ]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const updatePassword = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const { password } = req.body;

    const response = await client.query(query.updatePassword, [
      password,
      id
    ]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const deleteUser = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      await client.query(query.deleteUser, [ id ]);
      res.status(200).json(`User con id: ${id} deleted Successfully`);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

module.exports = {
  getUser,
  getLogin,
  createUser,
  updateUser,
  updatePassword,
  deleteUser
};