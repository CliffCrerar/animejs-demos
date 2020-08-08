const express = require('express')

express().use(express.static('./')).listen(3000);