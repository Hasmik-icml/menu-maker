import  express  from 'express';
import { menuRouter } from './index';

const app = express();
const port =  3000;
app.use(express.json());

app.use("/create", menuRouter);
app.use("/", menuRouter);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});