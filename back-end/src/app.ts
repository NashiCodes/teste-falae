require('module-alias/register');
import server from "@/server";

require("dotenv").config();

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});