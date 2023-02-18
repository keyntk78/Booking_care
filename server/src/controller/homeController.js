import { json } from "body-parser";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud/index.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud");
};

let listCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  console.log("------------------------");
  console.log(data);

  return res.render("crud/listCrud.ejs", {
    data: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUserInfo(userId);

    return res.render("crud/editCrud.ejs", {
      userData: userData,
    });
  } else {
    return res.send("not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let alluserData = await CRUDService.updateUser(data);

  return res.render("crud/listCrud.ejs", {
    data: alluserData,
  });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserId(id);
    return res.send("Ok");
  }

  return res.send("not found");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  listCRUD: listCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
