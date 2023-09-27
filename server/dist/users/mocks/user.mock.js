"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMock = void 0;
class UserMock {
    constructor() {
        this.users = [
            {
                "id": 1,
                "username": "samisams",
                "email": "samisams@gmail.com",
                "role": "CUSTOMER"
            },
            {
                "id": 2,
                "username": "samisams2",
                "email": "samisams2@gmail.com",
                "role": "CUSTOMER"
            }
        ];
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
}
exports.UserMock = UserMock;
//# sourceMappingURL=user.mock.js.map