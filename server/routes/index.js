const express = require('express');

const router = express.Router();
const { Op } = require('sequelize');
const { Document } = require('../db/models');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/find', async (req, res) => {
  const {
    id, nameDoc, dateStart, dateEnd, sort, typeSort,
  } = req.body;
  let findBase;
  try {
    if (id) {
      findBase = await Document.findOne({ where: { id }, raw: true });
      res.json([findBase]);
    } else if (nameDoc && dateStart && dateEnd) {
      findBase = await Document.findAll({
        where: {
          [Op.and]: [
            { name: { [Op.startsWith]: nameDoc } },
            { createdAt: { [Op.gte]: new Date(dateStart), [Op.lte]: new Date(dateEnd) } },
          ],
        },
        raw: true,
      });
      res.json(findBase);
    } else if (nameDoc && dateStart) {
      findBase = await Document.findAll({
        where: {
          [Op.and]: [
            { name: { [Op.startsWith]: nameDoc } },
            { createdAt: { [Op.gte]: new Date(dateStart) } },
          ],
        },
        raw: true,
      });
      res.json(findBase);
    } else if (nameDoc) {
      findBase = await Document.findAll({
        where: {
          name: { [Op.startsWith]: nameDoc },
        },
        raw: true,
      });
      res.json(findBase);
    } else if (dateStart) {
      findBase = await Document.findAll({
        where: {
          createdAt: { [Op.gte]: new Date(dateStart) },
        },
        order: [[typeSort, sort]],
        raw: true,
      });
      res.json(findBase);
    }
    // res.json(findBase);
    console.log(findBase);
  } catch (error) {
    res.send(error);
  }
  // res.status(200).end();
});

module.exports = router;
