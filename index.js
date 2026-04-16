


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

function combineUsers(...arrays){
  const mergedUsers = [].concat(...arrays);
  const today = new Date().toLocaleDateString("en-us");
  return{
    users: mergedUsers,
    merge_date: today
  };
}