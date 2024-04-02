// En src/services/userService.js

// Simulación de una base de datos de usuarios
let users = [];

class UserService {
  static async createUser(userData) {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    users.push(newUser);
    return newUser;
  }

  static async getUserById(userId) {
    return users.find(user => user.id === userId);
  }

  static async getUserByEmail(email) {
    return users.find(user => user.email === email);
  }

  static async updateUser(userId, userData) {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...userData };
      return users[index];
    }
    return null;
  }

  static async deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
  }
}

export default UserService;
