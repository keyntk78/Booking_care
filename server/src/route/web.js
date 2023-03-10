import express from "express";
import homeController from "../controller/homeController";
import userController from "../controller/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  //crud
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  router.get("/index", homeController.listCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);

  //rest api
  router.post("/api/login", userController.handleLogin);

  return app.use("/", router);
};

module.exports = initWebRoutes;
