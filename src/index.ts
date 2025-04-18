import app from "./app";

const PORT = 3000

const server = async ()=>{
    try {
        app.listen(PORT, () => {
          console.log(`Example app listening on http://localhost:${PORT}`);
        });
      } catch (error) {
        console.log('error:', error);
      }
}
server()