const baseURL = 'https://jsonbulut.com/api/'

// user
export const userURL = {
  login: `${baseURL}auth/login`,
  profileMe: `${baseURL}profile/me`,
  getAllUsers: `${baseURL}users`,
}

// products
export const productsURL = {
  getAll: `${baseURL}products`,
}