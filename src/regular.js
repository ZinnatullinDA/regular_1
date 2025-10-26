export default class Validator {
  static validateUsername(name) {
    if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
      return false;
    }

    if (/^[\d_-]|[\d_-]$/.test(name)) {
      return false;
    }

    if (/\d{4,}/.test(name)) {
      return false;
    }

    return true;
  }
}
