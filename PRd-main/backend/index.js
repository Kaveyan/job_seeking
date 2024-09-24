  require('dotenv').config();
  const express = require('express');
  const app = express();
  const cors = require('cors');
  const colors = require('colors');
  const connectDB = require('./config/db');

  connectDB();

  const {errorHandler} =require('./middleware/errorMiddleware');

  app.use(express.json());
  app.use(express.urlencoded({extended:false}))
  app.use(cors({
    origin: 'http://51.20.43.76',
    methods: 'GET,POST,PUT,DELETE', // Adjust the methods as needed
    allowedHeaders: 'Content-Type , Authorization', // Adjust the allowed headers as needed
  }));

  app.use('/api/userprofiledetails',require('./Routes/UserProfileRoutes'));
  app.use('/api/applyjob',require('./Routes/ApplyJob'));
  app.use('/api/users',require('./Routes/userRoutes'));
  app.use('/api/freelancer',require('./Routes/freeRoutes'));
  app.use('/api/company',require('./Routes/companyRoutes'));
  app.use('/api/createpost',require('./Routes/CreatePostRoutes'));
  app.use('/api/freepost',require('./Routes/FreePostRoutes'));
  app.use('/api/listapplyjob',require('./Routes/companyApplyRoutes'));
  app.use('/api/companyquestion',require('./Routes/CompanyQuestionRoutes'))



  app.use(errorHandler);


  const port = process.env.PORT || 5001;

  
  app.listen(port,console.log(`Listening on server port ${port}`));