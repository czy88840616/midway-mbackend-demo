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
const decorator_1 = require("@midwayjs/decorator");
let BookController = class BookController {
    async get() {
        this.ctx.body = await this.bookService.getBook();
    }
    async getBook() {
        const id = this.ctx.params.id;
        this.ctx.body = await this.bookService.getBook(id);
    }
};
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], BookController.prototype, "ctx", void 0);
__decorate([
    decorator_1.Inject(),
    __metadata("design:type", Object)
], BookController.prototype, "bookService", void 0);
__decorate([
    decorator_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "get", null);
__decorate([
    decorator_1.Get('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBook", null);
BookController = __decorate([
    decorator_1.Provide(),
    decorator_1.Controller('/book')
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9ib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUF1RTtBQUl2RSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBU3pCLEtBQUssQ0FBQyxHQUFHO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFHRCxLQUFLLENBQUMsT0FBTztRQUNYLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBO0FBZkM7SUFEQyxrQkFBTSxFQUFFOzsyQ0FDTDtBQUdKO0lBREMsa0JBQU0sRUFBRTs7bURBQ0c7QUFHWjtJQURDLGVBQUcsQ0FBQyxHQUFHLENBQUM7Ozs7eUNBR1I7QUFHRDtJQURDLGVBQUcsQ0FBQyxNQUFNLENBQUM7Ozs7NkNBSVg7QUFqQlUsY0FBYztJQUYxQixtQkFBTyxFQUFFO0lBQ1Qsc0JBQVUsQ0FBQyxPQUFPLENBQUM7R0FDUCxjQUFjLENBa0IxQjtBQWxCWSx3Q0FBYyJ9