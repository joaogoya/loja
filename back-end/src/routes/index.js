const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
      Rota: "GET",
      ProjectInfos:{
          name: "sistema Crud",
          version: "beta"
      }
    });
  });

  module.exports = router;