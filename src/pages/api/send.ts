export default async function handler(req, res) {
    if (req.method === "POST") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      const { id, name } = req.body;
  
      if (id && name) {
        if (id === 1016823) {
          return res.status(400).json({
            status: "error",
            message: "You can't send this character"
          });
        }
        return res.status(200).json({
          status: "success"
        });
      } else {
        return res.status(400).json({
          status: "error",
          message: "ID and NAME must be provided"
        });
      }
    } else {
      return res.status(404).json({});
    }
  }
  