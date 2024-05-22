const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://lucianosekulic:<s2faZm:BKQEmt:6>@cluster0.cngnoje.mongodb.net/'; // Replace with your actual MongoDB Atlas credentials
const dbName = 'contador-app'; // Database name
const collectionName = 'contadores'; // Collection name

// Connect to MongoDB Atlas on script load (using promises)
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB Atlas!');
    const db = client.db(dbName); // Access the database

    // Function to increment the counter
    function incrementarContador() {
      count++;
      contador.textContent = count;

      // Update localStorage (optional)
      localStorage.setItem("contador", count);

      // Get the collection "contadores"
      const collection = db.collection(collectionName);

      // Update or insert the document
      collection.findOneAndUpdate({ _id: 1 }, { $inc: { count: 1 } }, { upsert: true })
        .then(() => console.log('Counter updated in MongoDB!'))
        .catch(err => console.error('Error updating counter:', err));
    }

    // Function to load the counter
    function cargarContador() {
      // Get the collection "contadores"
      const collection = db.collection(collectionName);

      // Fetch the document
      collection.findOne({ _id: 1 })
        .then(document => {
          if (document) {
            count = document.count;
            contador.textContent = count;
          } else {
            console.log('Counter not found, starting at 0');
          }
        })
        .catch(err => console.error('Error fetching counter:', err));
    }

    // Load the counter on page load
    cargarContador();
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Button click event listener (assuming button ID is "btnActualizar")
document.getElementById('btnActualizar').addEventListener('click', incrementarContador);

