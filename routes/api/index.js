const router = require('express').Router();
const ThoughtsRoutes = require('./thoughts');
const userRoutes = require('./users');

router.use('/thoughts', ThoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
