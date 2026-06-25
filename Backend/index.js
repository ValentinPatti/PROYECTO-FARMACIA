require ("dotenv").config();

const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json());

const medicamentoRoutes = 
    require("./routes/medicamentoRoutes");

app.use(
    "/api/medicamentos",
    medicamentoRoutes
);

app.listen(
    process.env.PORT,
    () => {
        console.log(
            `Servidor ejecutandose en puerto ${process.env.PORT}`
        )
    }
    
)