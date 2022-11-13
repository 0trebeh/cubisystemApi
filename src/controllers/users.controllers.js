const pool = require('../utils/dbconnection');
const { mail } = require('../utils/mailer');
const query = require('../utils/queries');

const getName = async (req, res) => {
  const client = await pool.connect();
  try{
    const { nombre } = req.body;
    const response = await client.query(query.getName1, [nombre]);
    const response2 = await client.query(query.getName2, [nombre]);
    const response3 = await client.query(query.getName3, [nombre]);
    res.status(200).json([response.rows, response2.rows, response3.rows]);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getEmpleados = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getUsers, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const getAdmins = async (req, res) => {
  const client = await pool.connect();
  try{
    const id = parseInt(req.params.id);
    const response = await client.query(query.getAdmins, [id]);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createEmpresa = async (req, res) => {
  const client = await pool.connect();
  try{
    const { nombre, email, password } = req.body;
    console.log(nombre, email, password);
    const response = await client.query(query.createEmpresa, [
      nombre, 
      email,
      password
    ]);

    //send email of welcome
    await mail(nombre, email, "empresa");
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createAdmin = async (req, res) => {
  const client = await pool.connect();
  try{
    const { nombre, email, clave, empresa_id } = req.body;
    console.log(nombre, email, clave, empresa_id);
    const response = await client.query(query.createAdmin, [
      nombre, 
      email,
      clave,
      empresa_id
    ]);

    //send email of welcome
    await mail(nombre, email, "admin", clave);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const createEmpleado = async (req, res) => {
  const client = await pool.connect();
  try{
    const { nombre, email, cargo, clave, empresa_id, admin_id } = req.body;
    console.log(nombre, email, cargo, clave, admin_id);
    const response = await client.query(query.createEmpleado, [
      nombre, 
      email,
      cargo,
      clave,
      empresa_id,
      admin_id
    ]);

    //send email of welcome
    await mail(nombre, email, "empleado", clave);
    res.status(200).json(response.rows);
  }catch{
    res.status(505);
  }finally{
    client.release(true);
  }
};

const deleteEmpleado = async (req, res) => {
  const client = await pool.connect();
  try{
      const id = parseInt(req.params.id);
      await client.query(query.deleteEmpleado, [ id ]);
      res.status(200).json(`Empleado con id: ${id} deleted Successfully`);
  }catch{
      res.status(505);
  }finally{
      client.release(true);
  }
};

module.exports = {
  getAdmins,
  getName,
  getEmpleados,
  createEmpresa,
  createAdmin,
  createEmpleado,
  deleteEmpleado
};