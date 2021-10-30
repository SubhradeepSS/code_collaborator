const express = require("express") ;
const cors = require("cors") ;

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const PORT = 8080;


server.use("/api", require('./routes/message'));
server.use("/api", require('./routes/room'));
server.use("/api", require('./routes/share'));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});