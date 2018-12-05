const MongoClient = require("mongodb").MongoClient;

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

dao = {};

dao.dbConnect = () => {
    mongoClient.connect(function (err, client) {

        if (err) {
            return console.log(err);
        }else{
            console.log("Mongo connect success"/*, client*/);
        }
        // взаимодействие с базой данных
        client.close();
    });
}

dao.getComments = () => {
    mongoClient.connect(function (err, client) {

        if (err) {
            return console.error(err);
        }else{
            const db = client.db("userdb");
            //const db = client.db("usersdb");
            const collection = db.collection("users");
        
            if(err) return console.log(err);
            
            collection.find().toArray(function(err, results){
                        
                console.log(results);
                client.close();
            });
        }
        // взаимодействие с базой данных
        client.close();
    });
}



module.exports = dao;