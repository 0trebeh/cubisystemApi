CREATE TABLE "usuario" (
  "id" serial PRIMARY KEY,
  "nombre" varchar,
  "telefono" varchar,
  "email" varchar,
  "password" varchar,
  "admin" boolean
);

CREATE TABLE "peticiones" (
  "id" serial PRIMARY KEY,
  "tipoServicio" varchar,
  "dimencion" varchar,
  "camExt" varchar,
  "camInt" varchar,
  "tipoLugar" varchar,
  "ubicacion" varchar,
  "numComp" varchar,
  "costo" varchar,
  "id_usuario" integer NOT NULL
);

ALTER TABLE "peticiones" ADD FOREIGN KEY ("id_usuario") REFERENCES "usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
