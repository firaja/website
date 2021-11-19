var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = {
    title: 'David Bertoldi | Technical Architect',
    description: 'Senior Technical Architect at Salesforce. 6+ years of experience on Ecommerce with SAP Hybris/Commerce Cloud and Salesforce Commerce Cloud. Passionate about Computer Science, Cloud Computing, Machine Learning and Mathematics. Based in Milan, Italy',
    year: new Date().getFullYear()
  };

  res.render('index', data);
});

module.exports = router;
