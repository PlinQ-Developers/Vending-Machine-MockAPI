"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var VendingMachineController_1 = require("../../adapters/controllers/VendingMachineController");
var router = express_1.default.Router();
router.get('/change', VendingMachineController_1.getCoinInventory);
router.get('/products', VendingMachineController_1.getProductInventory);
router.post('/products/selected', VendingMachineController_1.selectProduct);
router.post('/admin/coins', VendingMachineController_1.addCoins);
router.post('/admin/products', VendingMachineController_1.addProduct);
exports.default = router;
