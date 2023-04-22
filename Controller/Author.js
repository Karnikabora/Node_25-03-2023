const Author = require("../Model/Author")


exports.getAuthors = async (req, res) => {
    try {
      const allAuthors = await Author.find({});
      return res.json(allAuthors);
    } catch (err) {
      console.log(err);
      res.send("Error");
    }
  };
  
  exports.postAuthors = async (req, res) => {
    try {
      const newAuthor = new Author({
        name: req.body.name,
        email: req.body.email,
      });
  
      const result = await newAuthor.save();
      console.log("Data updated successfully");
      res.send("Data updated successfully");
    } catch (err) {
      console.log(err);
      res.send("Error");
    }
  };