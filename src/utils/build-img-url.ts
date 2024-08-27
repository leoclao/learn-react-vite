/**
 * Constructs an image URL based on the provided URL object.
 * @param {object} url - The URL object containing domain, directory, id, size, name, format, and query parameters.
 * @returns {string} The final image URL with all parameters included.
 */
export default function buildImageUrl(url) {
  if (!url || !url.domain) {
    throw new Error("Invalid URL object");
  }

  const urlDirectory = url.directory ? `/${url?.directory}` : '';
  const urlId = url.id ? `/${url?.id}` : '';
  const urlSize = url.size ? `/${url?.size}` : '';
  const urlName = url.name ? `/${url?.name}` : '';
  const urlFormat = url.format ? `.${url?.format}` : '';
  const urlWithParams = `${url?.domain}${urlDirectory}${urlId}${urlSize}${urlName}${urlFormat}`;
  const queryString = url.query ? Object.entries(url?.query).map(([key, value]) => `${key}=${value}`).join('&') : '';

  const urlFinal = `${urlWithParams}${queryString ? `?${queryString}` : ''}`;

  return urlFinal;
}