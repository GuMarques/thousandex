function capitalizeString(string: String) {
  if (string.length === 0) return string;
  if (string.length === 1) return string.toUpperCase();
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default capitalizeString