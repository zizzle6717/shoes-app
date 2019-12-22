"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redisClient = new ioredis_1.default(process.env.REDIS_PORT, process.env.REDIS_HOST);
redisClient.on('error', (err) => {
    console.warn(err);
});
exports.default = redisClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXNDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWRpc0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE0QjtBQUU1QixNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUU5RSxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBZSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XG5cbmNvbnN0IHJlZGlzQ2xpZW50ID0gbmV3IFJlZGlzKHByb2Nlc3MuZW52LlJFRElTX1BPUlQsIHByb2Nlc3MuZW52LlJFRElTX0hPU1QpO1xuXG5yZWRpc0NsaWVudC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gIGNvbnNvbGUud2FybihlcnIpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlzQ2xpZW50O1xuIl19