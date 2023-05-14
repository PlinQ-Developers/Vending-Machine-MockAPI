"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachineService = void 0;
var vendingMachine_1 = require("../../domain/vendingMachine");
var VendingMachineService = /** @class */ (function () {
    function VendingMachineService(coinInventoryRepository, productInventoryRepository) {
        this.vendingMachine = new vendingMachine_1.VendingMachine(coinInventoryRepository, productInventoryRepository);
    }
    VendingMachineService.prototype.getCoinInventory = function () {
        var coins = this.vendingMachine.getCoinsInventory();
        return { coins: coins };
    };
    VendingMachineService.prototype.getProductInventory = function () {
        var products = this.vendingMachine.getProductsInventory();
        return { products: products };
    };
    VendingMachineService.prototype.addCoins = function (coinValue, coinCount) {
        this.vendingMachine.addCoins(coinValue, coinCount);
    };
    VendingMachineService.prototype.addProduct = function (productName, productPrice, productCount) {
        this.vendingMachine.addProduct(productName, productPrice, productCount);
    };
    VendingMachineService.prototype.selectedProduct = function (productId, coins) {
        return this.vendingMachine.selectProduct(productId, coins);
    };
    return VendingMachineService;
}());
exports.VendingMachineService = VendingMachineService;
