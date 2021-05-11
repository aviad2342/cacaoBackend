"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Video = /** @class */ (function () {
    function Video() {
    }
    Video.prototype.addId = function () {
        this.id = uuid_1.v4();
    };
    __decorate([
        typeorm_1.PrimaryColumn("uuid"),
        __metadata("design:type", String)
    ], Video.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "videoId", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "videoURL", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "embed", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column("datetime"),
        __metadata("design:type", Date)
    ], Video.prototype, "date", void 0);
    __decorate([
        typeorm_1.Column("varchar", { length: 255 }),
        __metadata("design:type", String)
    ], Video.prototype, "thumbnail", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Video.prototype, "addId", null);
    Video = __decorate([
        typeorm_1.Entity()
    ], Video);
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=Video.js.map