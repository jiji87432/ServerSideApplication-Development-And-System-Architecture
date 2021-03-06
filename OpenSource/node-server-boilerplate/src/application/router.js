/**
 * Created by apple on 16/10/9.
 */

import UserController from "../business/controller/UserController";
import { serveStatic } from "../business/controller/StaticController";
import { wrappingKoaRouter } from "swagger-decorator";
const Router = require("koa-router");

const router = new Router();

// 封装原有的 koa-router 对象
wrappingKoaRouter(router, "localhost:8080", "/api", {
  title: "Node Server Boilerplate",
  version: "0.0.1",
  description: "Koa2, koa-router,Webpack"
});

// 定义默认的根路由
router.get("/", async function(ctx, next) {
  ctx.body = { msg: "Node Server Boilerplate" };
});

//定义用户处理路由
router.scan(UserController);

//定义全局静态文件支持路由
router.get("/static/*", serveStatic("./static"));

//默认导出路由配置
export default router;
