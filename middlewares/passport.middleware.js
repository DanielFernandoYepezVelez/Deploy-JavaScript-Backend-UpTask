"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportJwt = void 0;
const passport_jwt_1 = require("passport-jwt");
class PassportJwt {
    constructor() {
        this.options = {
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET_KEY || 'token_para_desarrollo',
        };
    }
    newStrategia() {
        return new passport_jwt_1.Strategy(this.options, (payloadFromJwt, done) => {
            const idUser = payloadFromJwt.id;
            if (idUser) {
                return done(null, idUser);
            }
            else {
                return done(null, false);
            }
        });
    }
}
exports.PassportJwt = PassportJwt;
