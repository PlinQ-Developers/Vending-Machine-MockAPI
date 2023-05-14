import express from 'express';

import bodyParser from 'body-parser';
import vendingMachineRoutes from './interfaces/http/vendingMachineRoutes';

const port = 3200 || process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.use('/api/v1/vending', vendingMachineRoutes);
app.listen(port, () => {
    console.log('Server is running on PORT: ' + port);
})