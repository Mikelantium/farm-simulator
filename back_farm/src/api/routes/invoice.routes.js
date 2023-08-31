const express = require("express")
const {getInvoice, postInvoice, putInvoice, deleteInvoice} = require("../controllers/invoice.controllers")
const {isAuth, isAdmin} = require("../../middlewares/auth")

const invoiceRoutes = express.Router();

invoiceRoutes.get("", [isAuth], getInvoice);
invoiceRoutes.post("", [isAdmin], postInvoice);
invoiceRoutes.put("/:id", [isAdmin], putInvoice);
invoiceRoutes.delete("/:id", [isAdmin], deleteInvoice);


module.exports= invoiceRoutes;