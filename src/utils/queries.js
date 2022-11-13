module.exports = {
    //Querys Usuario

    getUsers: 'SELECT * FROM empleado WHERE admin_id = $1',
    getAdmins: 'SELECT * FROM admin WHERE empresa_id = $1',
    getName1: 'SELECT * FROM empleado WHERE nombre = $1',
    getName2: 'SELECT * FROM admin WHERE nombre = $1',
    getName3: 'SELECT * FROM empresa WHERE nombre = $1',

    createEmpresa: 'INSERT INTO empresa (nombre, email, password) VALUES ($1, $2, $3) RETURNING *',
    createAdmin: 'INSERT INTO admin (nombre, email, clave, empresa_id) VALUES ($1, $2, $3, $4) RETURNING *',
    createEmpleado: 'INSERT INTO empleado (nombre, email, cargo, clave, empresa_id, admin_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',

    updateDataEmp: 'UPDATE "dataEmpresa" SET title = $1, descripcion = $2, contacto = $3 WHERE id_empresa = $4 RETURNING *',

    deleteEmpleado: 'DELETE FROM "empleado" WHERE "id_empleado" = $1',

    //Querys peticiones

    

}