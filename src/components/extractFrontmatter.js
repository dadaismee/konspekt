export const getFrontmatter = (courseFiles, keyword) => {
  let courses = courseFiles
    .find(course => course.url.includes(keyword));
  return courses;
};
