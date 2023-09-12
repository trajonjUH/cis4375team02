const app = require('./app');  // Assuming your app setup is in app.js

const port = process.env.PORT || 3000;  // Allow using environment variable for port
app.listen(port, () => {
    console.log(`Yippee! Server is running on port ${port}`);
});
