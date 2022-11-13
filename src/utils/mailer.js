const nodemailer = require("nodemailer");
require('dotenv').config();

const mail = async (username, email, rol, clave) => {

  console.log(username, email, rol, clave);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'organizeddoc@gmail.com',
      pass: 'scno xilc ibsj qplg'
    },
  });

  if(rol === "empresa"){
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"DocOr " <'+ 'organizeddoc@gmail.com' +'>', 
      to: email, 
      subject: "Hola "+ username +"!. Bienvenido a DocOr! ✔",
      text: "Dale un giro de 180 grados a tu empresa con Docor!, agilizando la integracion de nuevos empleados y creando espacios de administracion de tus equipos para una mejor experiencia centralizada."+
      "\n\nEmpieza ya!"
    });
  }
  if(rol === "admin"){
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"DocOr " <'+ 'organizeddoc@gmail.com' +'>', 
      to: email, 
      subject: "Hola "+ username +"!. Bienvenido a DocOr! ✔",
      text: "Ahora eres admin! Empieza ya a organizar la documentacion y los archivos de tu equipo"+
      "\n\nTu clave de acceso es: "+clave
    });
  }
  if(rol === "empleado"){
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"DocOr " <'+ 'organizeddoc@gmail.com' +'>', 
      to: email, 
      subject: "Hola "+ username +"!. Bienvenido a DocOr! ✔",
      text: "Ahora eres parte de DocOr!. Inicia Session para ver todo lo que necesitas y agilizar tu curva de aprendizaje."+
      "\n\nTu clave de acceso es: "+clave
    });
  }

  return 0;
  
}

module.exports = {
  mail
};