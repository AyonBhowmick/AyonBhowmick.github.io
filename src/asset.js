// Builds the URL of a file in /public (handles spaces in folder names).
export const asset = (path) => import.meta.env.BASE_URL + encodeURI(path);
