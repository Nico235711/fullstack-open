import { server } from "./server.js";

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/persons`);
});
