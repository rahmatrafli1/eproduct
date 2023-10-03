import { errorHandler } from "../helper/errorHandler.js";
import models from "../models/init-models.js";

const updateCust = async (req, res) => {
  try {
    const result = await models.customers.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id }, returning: true }
    );
    res.send(errorHandler(result, 200, "Customer Success Updated!!!"));
  } catch (error) {
    res.send(errorHandler("Error!!", 500, error.message));
  }
};

export default { updateCust };
