"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemcachedService = void 0;
const Memcached = require("memcached");
class MemcachedService {
    constructor() {
        this.memcached = new Memcached('localhost:11211');
    }
    get(key) {
        return new Promise((resolve, reject) => {
            this.memcached.get(key, (error, data) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    set(key, value, expiration) {
        return new Promise((resolve, reject) => {
            this.memcached.set(key, value, expiration, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
}
exports.MemcachedService = MemcachedService;
//# sourceMappingURL=memcached.service.js.map