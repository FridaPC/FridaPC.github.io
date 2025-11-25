const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Carpeta con tu index.html

app.listen(PORT, () => {
  console.log("App corriendo en puerto", PORT);
});
