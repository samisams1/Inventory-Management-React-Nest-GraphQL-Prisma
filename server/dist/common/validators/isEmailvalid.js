"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
exports.default = isValidEmail;
//# sourceMappingURL=isEmailvalid.js.map