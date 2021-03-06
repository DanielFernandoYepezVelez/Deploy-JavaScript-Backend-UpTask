"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleTokenVerify = void 0;
const google_auth_library_1 = require("google-auth-library");
class GoogleTokenVerify {
    constructor() {
        this.client = new google_auth_library_1.OAuth2Client(process.env.CLIENT_ID);
    }
    verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = yield this.client.verifyIdToken({
                idToken: token,
                audience: process.env.CLIENT_ID,
            });
            const payload = ticket.getPayload();
            const { email, name, picture } = payload;
            return { email, name, picture };
        });
    }
}
exports.GoogleTokenVerify = GoogleTokenVerify;
