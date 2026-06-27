require ("dotenv").config();

const express = require("express")
const cors = require("cors");
const indexRouter = require("./routes/index.routes.js");

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use('/api', indexRouter)

// app.use("/api/medicamentos",medicamentoRoutes);


app.listen(PORT,() => {
        console.log(`Servidor ejecutandose en http://localhost:${PORT}`)
    }
    
)