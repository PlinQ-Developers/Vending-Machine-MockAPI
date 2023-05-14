"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectProduct = exports.addProduct = exports.addCoins = exports.getProductInventory = exports.getCoinInventory = void 0;
var vendingMachineService_1 = require("../../application/usecases/vendingMachineService");
var coinInventoryRepositoryImpl_1 = require("../../infrastructure/persistence/coinInventoryRepositoryImpl");
var productInventoryRepositoryImpl_1 = require("../../infrastructure/persistence/productInventoryRepositoryImpl");
var coinInventoryRepository = new coinInventoryRepositoryImpl_1.CoinInventoryRepositoryImpl();
var productInventoryRepository = new productInventoryRepositoryImpl_1.ProductInventoryRepositoryImpl();
var vendingMachineService = new vendingMachineService_1.VendingMachineService(coinInventoryRepository, productInventoryRepository);
var getCoinInventory = function (req, res) {
    var coinInventory = vendingMachineService.getCoinInventory();
    res.json(coinInventory);
};
exports.getCoinInventory = getCoinInventory;
var getProductInventory = function (req, res) {
    var productInventory = vendingMachineService.getProductInventory();
    res.json(productInventory);
};
exports.getProductInventory = getProductInventory;
var addCoins = function (req, res) {
    var _a = req.body, coinValue = _a.coinValue, coinCount = _a.coinCount;
    vendingMachineService.addCoins(coinValue, coinCount);
    res.sendStatus(201);
};
exports.addCoins = addCoins;
var addProduct = function (req, res) {
    var _a = req.body, productName = _a.productName, productPrice = _a.productPrice, productCount = _a.productCount;
    vendingMachineService.addProduct(productName, productPrice, productCount);
    res.sendStatus(201);
};
exports.addProduct = addProduct;
var selectProduct = function (req, res) {
    var _a = req.body, productId = _a.productId, coins = _a.coins;
    var selectedProduct = vendingMachineService.selectedProduct(productId, coins);
    if (selectedProduct) {
        res.json(selectedProduct);
    }
    else {
        res.sendStatus(404);
    }
};
exports.selectProduct = selectProduct;
