import mongoose from 'mongoose';

// mongoose.connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@cluster0-jwbee.mongodb.net/${process.env.NAME_DB}?retryWrites=true&w=majority`, {
mongoose.connect("mongodb+srv://squadreact:react123@cluster0-jwbee.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
