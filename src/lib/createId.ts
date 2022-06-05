let id = 0;
const createId = ():number => {
  id += 1;
  window.localStorage.setItem('_idMax', id.toString());
  return id;
};

export default createId;