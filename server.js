const express = require("express") ;
const cors = require("cors") ;

const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const PORT = 8080;

// const roomRoutes = require("./routes/room");
// const messageRoutes = require("./routes/messages");

// server.use("/api", roomRoutes);
// server.use("/api", messageRoutes);
server.use("/api", require('./routes/userRoutes'));

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});