export const typograf = (text) => {
  const prepositionsPattern = /(\s)(и|из|к|или|без|в|с|на|не|по|для|от|А|за)(\s)/g;
  return text.replace(prepositionsPattern, (match, p1, p2, p3) => {
    return `${p1}${p2}\u00A0`;
  });
};
