import $ from "jquery";

export const fetchPodcast = (url) => {
  return $.getJSON(url);
};

// export const convertCamelCase = (str) => {
//   return str.replace(/([A-Z])/g, " $1").replace(/^./, function (str) {
//     return str.toUpperCase();
//   });
// };
