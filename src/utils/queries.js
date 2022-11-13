module.exports = {
    //Querys Usuario

    getUser: 'SELECT * FROM usuario WHERE id = $1',
    getLogin: 'SELECT * FROM usuario WHERE email = $1',

    createUser: 'INSERT INTO usuario (nombre, telefono, email, password, admin) VALUES ($1, $2, $3, $4, $5) RETURNING *',

    updateUser: 'UPDATE usuario SET nombre = $1, telefono = $2 WHERE id = $3 RETURNING *',
    updatePassword: 'UPDATE usuario SET password = $1 WHERE id = $2 RETURNING *',

    deleteUser: 'DELETE FROM usuario WHERE "id" = $1',

    //Querys peticiones
    getPeticiones: 'SELECT * FROM "peticiones"',

    createPeticion: 'INSERT INTO "peticiones" ("tipoServicio", "dimencion", "camExt", "camInt", "tipoLugar", "ubicacion", "numComp", "costo", "id_usuario") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',

    updatePeticion: 'UPDATE "peticiones" SET "costo" = $1 WHERE "id" = $2 RETURNING *',

    deletePeticion: 'DELETE FROM "peticiones" WHERE "id" = $1',

}