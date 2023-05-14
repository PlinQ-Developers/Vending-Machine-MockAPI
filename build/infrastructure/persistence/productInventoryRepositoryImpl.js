"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryRepositoryImpl = void 0;
var ProductInventoryRepositoryImpl = /** @class */ (function () {
    function ProductInventoryRepositoryImpl() {
        this.productInventory = [];
    }
    ProductInventoryRepositoryImpl.prototype.getAllProducts = function () {
        return this.productInventory;
    };
    ProductInventoryRepositoryImpl.prototype.updateProductInventory = function (products) {
        this.productInventory = products;
    };
    return ProductInventoryRepositoryImpl;
}());
exports.ProductInventoryRepositoryImpl = ProductInventoryRepositoryImpl;
