const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://lucianosekulic:<s2faZm:BKQEmt:6>@cluster0.cngnoje.mongodb.net/'; // Reemplaza con tus credenciales y datos
const client = new MongoClient(uri);

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB Atlas!');
});

function incrementarContador() {
  count++;
  contador.textContent = count;

  // Actualizar localStorage (opcional)
  localStorage.setItem("contador", count);

  // Conectar con MongoDB (si no lo has hecho antes)
  if (!client.isConnected()) {
    client.connect(err => {
      if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
      }
      console.log('Connected to MongoDB Atlas!');
    });
  }

  // Obtener la colección "contadores"
  const collection = client.db('contador-app').collection('contadores');

  // Actualizar o insertar el documento del contador
  collection.findOneAndUpdate({ _id: 1 }, { $inc: { count: 1 } }, { upsert: true }, (err, result) => {
    if (err) {
      console.error('Error updating counter in MongoDB:', err);
      return;
    }
    console.log('Counter updated in MongoDB!');
  });
}

