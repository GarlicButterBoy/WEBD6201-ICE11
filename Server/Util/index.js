"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireAuth = exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return '';
}
exports.UserDisplayName = UserDisplayName;
function RequireAuth(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}
exports.RequireAuth = RequireAuth;
//# sourceMappingURL=index.js.map