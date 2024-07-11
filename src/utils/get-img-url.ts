/**
 * Returns the complete image URL with parameters based on the provided inputs.
 * 
 * @param {string} url - The base URL where the image is located.
 * @param {string} directory - The directory within the base URL where the image is stored.
 * @param {string} name - The name of the image file.
 * @param {object} params - Additional parameters to be added to the URL (key-value pairs).
 * @returns {string} The complete image URL with parameters.
 */
export default function getImageUrl(url) {
  let urlWithParams = `${url?.domain}/${url?.directory}/${url?.name}${url?.id}`;
  for (const [key, value] of Object.entries(url?.params)) {
    urlWithParams += `&${key}=${value}`;
  }
  return urlWithParams;
}