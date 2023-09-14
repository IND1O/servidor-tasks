import Task from "../models/task.model.js";

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const getTasks = async (req, res) => {
  try {
    const respuesta = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(respuesta);
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newtask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const saveTask = await newtask.save();
    res.json(saveTask);
  } catch (error) {
    return res.status(500).json({ message: "Ocurrio un error" });
  }
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//

//===/===/===/===/===/===/===/===/===/===/===/===/===//
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
};
//===/===/===/===/===/===/===/===/===/===/===/===/===//
