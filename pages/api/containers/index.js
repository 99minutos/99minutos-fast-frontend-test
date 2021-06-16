import DB from "../../../database/db";
import enablePublicAccess from "../../../cors-middleware";

const allAvos = async (req, res) => {
  try {
    await enablePublicAccess(req, res);

    const db = new DB();
    const allEntries = await db.getAll();

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data: allEntries }));
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end(
      JSON.stringify({ length: 0, data: [], error: "Something went wrong" })
    );
  }
};

export default allAvos;
