// unit test this
const createHTML = (htmlElement, classNameStr, idNameStr, innerTextStr) => {
  const result = document.createElement(htmlElement);
  if (classNameStr != null) result.className = classNameStr;
  if (idNameStr != null) result.id = idNameStr;
  if (innerTextStr != null) result.innerText = innerTextStr;
  return result;
};

export default createHTML;
