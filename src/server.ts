import express, { Response, response } from "express";
import publicRouter from "./routes/router.public";
import privateRouter from "./routes/router.private";
// import administratorsRouter from "./routes/routes.administrators";
// import problemRouter from './routes/routes.problems'

const app = express();
app.use(express.json());

app.use(publicRouter)
app.use(privateRouter)

// app.use("/administrator", administratorsRouter);
// app.use('/problem', problemRouter)

app.all('*', (_, response: Response) => {
    return response.status(404).json({
        message: 'Está rota não existe'
    })
})

app.listen(3000, () => console.log("Start"));
