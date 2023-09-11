import Task from "../models/task.model.js";

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const getTasks = async (req, res) => {
  const respuesta = await Task.find({
    user: req.user.id,
  }).populate("user");
  res.json(respuesta);
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newtask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  const saveTask = await newtask.save();
  res.json(saveTask);
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id).populate("user");
  //.select(-password);
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  return res.sendStatus(204);
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
  res.json(task);
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//
