const mongoose = require("mongoose")
uri = 
"mongodb+srv://Deepak:<qWyJMoEALfdvYq3K>@emsecapi.xkg5ric.mongodb.net/EmsecAPI?retryWrites=true&w=majority "


const connectDB =() => {
    console.log("connect database");

    return mongoose.connect(uri, {
        useNewParser: true,
        useUnifiedtopology: true,
    });
};


modules.exports = connectDB; 