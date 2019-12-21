"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const app_1 = __importDefault(require("./app"));
let devServer;
if (!process.env.PORT) {
    console.log('Missing ENV varaibles...Exiting!');
    process.exit(1);
}
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}
// Run npm start <custom-port>
const PORT = process.env.NODE_ENV === 'development' && parseInt(process.argv[2], 10)
    || parseInt(process.env.PORT, 10);
// Start server
if (process.env.NODE_ENV !== 'development') {
    const options = {
        key: fs_1.default.readFileSync(process.env.CERT_KEY || ''),
        cert: fs_1.default.readFileSync(process.env.CERT_FILE || ''),
    };
    https_1.default.createServer(options, app_1.default).listen(PORT);
}
else {
    devServer = app_1.default.listen(process.env.PORT, () => {
        console.info(`server started on ${PORT}`);
    });
}
if (devServer && module.hot) {
    module.hot.accept();
    module.hot.dispose(() => devServer.close());
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRDQUFvQjtBQUNwQixrREFBMEI7QUFDMUIsZ0RBQXdCO0FBRXhCLElBQUksU0FBUyxDQUFDO0FBRWQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQTtJQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCO0FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztDQUN0QztBQUVELDhCQUE4QjtBQUM5QixNQUFNLElBQUksR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO09BQ3ZGLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVwQyxlQUFlO0FBQ2YsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLEVBQUU7SUFDMUMsTUFBTSxPQUFPLEdBQUc7UUFDZCxHQUFHLEVBQUUsWUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxFQUFFLFlBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO0tBQ25ELENBQUM7SUFFRixlQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDL0M7S0FBTTtJQUNMLFNBQVMsR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0NBQ0o7QUFvQkQsSUFBSSxTQUFTLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUMzQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0NBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcblxubGV0IGRldlNlcnZlcjtcblxuaWYgKCFwcm9jZXNzLmVudi5QT1JUKSB7XG4gIGNvbnNvbGUubG9nKCdNaXNzaW5nIEVOViB2YXJhaWJsZXMuLi5FeGl0aW5nIScpXG4gIHByb2Nlc3MuZXhpdCgxKTtcbn1cblxuaWYgKCFwcm9jZXNzLmVudi5OT0RFX0VOVikge1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9ICdkZXZlbG9wbWVudCc7XG59XG5cbi8vIFJ1biBucG0gc3RhcnQgPGN1c3RvbS1wb3J0PlxuY29uc3QgUE9SVDogbnVtYmVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgcGFyc2VJbnQocHJvY2Vzcy5hcmd2WzJdLCAxMClcbiAgfHwgcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCwgMTApO1xuXG4vLyBTdGFydCBzZXJ2ZXJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIGtleTogZnMucmVhZEZpbGVTeW5jKHByb2Nlc3MuZW52LkNFUlRfS0VZIHx8ICcnKSxcbiAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMocHJvY2Vzcy5lbnYuQ0VSVF9GSUxFIHx8ICcnKSxcbiAgfTtcblxuICBodHRwcy5jcmVhdGVTZXJ2ZXIob3B0aW9ucywgYXBwKS5saXN0ZW4oUE9SVCk7XG59IGVsc2Uge1xuICBkZXZTZXJ2ZXIgPSBhcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQsICgpID0+IHtcbiAgICBjb25zb2xlLmluZm8oYHNlcnZlciBzdGFydGVkIG9uICR7UE9SVH1gKVxuICB9KTtcbn1cblxuLy8gSG90IE1vZHVsZSBSZWxvYWRpbmdcbnR5cGUgTW9kdWxlSWQgPSBzdHJpbmcgfCBudW1iZXI7XG5cbmludGVyZmFjZSBXZWJwYWNrSG90TW9kdWxlIHtcbiAgaG90Pzoge1xuICAgIGRhdGE6IGFueTtcbiAgICBhY2NlcHQoXG4gICAgICBkZXBlbmRlbmNpZXM6IHN0cmluZ1tdLFxuICAgICAgY2FsbGJhY2s/OiAodXBkYXRlZERlcGVuZGVuY2llczogTW9kdWxlSWRbXSkgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xuICAgIGFjY2VwdChkZXBlbmRlbmN5OiBzdHJpbmcsIGNhbGxiYWNrPzogKCkgPT4gdm9pZCk6IHZvaWQ7XG4gICAgYWNjZXB0KGVyckhhbmRsZXI/OiAoZXJyOiBFcnJvcikgPT4gdm9pZCk6IHZvaWQ7XG4gICAgZGlzcG9zZShjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZCk6IHZvaWQ7XG4gIH07XG59XG5cbmRlY2xhcmUgY29uc3QgbW9kdWxlOiBXZWJwYWNrSG90TW9kdWxlO1xuXG5pZiAoZGV2U2VydmVyICYmIG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IGRldlNlcnZlci5jbG9zZSgpKTtcbn0iXX0=