import express from 'express';
import {
    getCoinInventory,
    getProductInventory,
    addCoins,
    addProduct,
    selectProduct,
} from "../../adapters/controllers/VendingMachineController";

const router = express.Router();

router.get('/change', getCoinInventory);
router.get('/products', getProductInventory);
router.post('/products/selected', selectProduct);

router.post('/admin/coins', addCoins);
router.post('/admin/products', addProduct);

export default router;