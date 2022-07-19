import Services from "../models/Services.js";

const createService = async (req, res) => {
  try {
    const service = req.body;
    await Services.create(service);
    res.status(201).json({ msg: "Sucssfully Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const updateService = async (req, res) => {
  const id = req.params.id;
  try {
    const serviceToEdit = req.body;
    await Services.findByIdAndUpdate(id, serviceToEdit);
    res.status(200).json({ msg: "Successfully Edited" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getOneService = async (req, res) => {
  const id = req.params.id;
  try {
    const service = await Services.findById(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Services.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteService = async (req, res) => {
  const id = req.params.id;
  try {
    const services = await Services.findByIdAndDelete(id);
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export {
  createService,
  deleteService,
  getOneService,
  getAllServices,
  updateService,
};
