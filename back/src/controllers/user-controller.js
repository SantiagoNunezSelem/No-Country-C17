const { Usuario } = require("./../db");

const createUser = async (req, res) => {
  let data = req.body;
  try {
    //const newUser = await Usuario.create(req.body);
    let newUser = Array.isArray(data)
      ? await Usuario.bulkCreate(data)
      : await Usuario.create(data);
    res.status(201).json({ sucess: true, newUser });
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      res.status(404).json({ sucess: false, message: "Usuario no encontrado" });
    } else {
      res.status(200).json({ sucess: true, user });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Usuario.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUser = await Usuario.findByPk(id);
      res.status(200).json({ sucess: true, updatedUser });
    } else {
      res.status(404).json({ sucess: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Usuario.destroy({
      where: {  idUsuario: id  },
    });
    if (deleted) {
      res.status(204).send({ sucess: true, message: "Usuario eliminado" });
    } else {
      res.status(404).json({ sucess: false, message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ sucess: false, message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
