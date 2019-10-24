const express = require('express');
const router = express.Router();

/**
 * @api {get} / 1. welcome page
 * @apiGroup A.client
 * @apiPermission none
 *
 * @apiDescription It will return a welcome message
 * 
 * @apiSuccess (Success) {String} status 200
 */
router.get('/', (req, res) => {
    res.redirect('apidoc/index.html');
});

module.exports = router;