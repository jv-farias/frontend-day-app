/** @param {Talk} */
export function hasSaved(talk) {
  const savedIds = getSavedTalkIds();

  return savedIds.includes(talk.id);
}
/** @return {Array<string>} */
export function getSavedTalkIds() {
  const lcContent = localStorage.getItem('savedIdTalks') || '[]';
  return JSON.parse(lcContent) || [''];
}
/** @type {Array<string>} ids*/
export function setSavedTalkIds(ids = []) {
  const lcContent = JSON.stringify(ids);
  localStorage.setItem('savedIdTalks', lcContent);
}
/** @type {string} id*/
function addSavedIdTalk(id) {
  const ids = getSavedTalkIds();
  const removeDuplicates = [...ids, id];
  // remove possible duplicates;
  setSavedTalkIds(removeDuplicates);
}
function removeSavedIdTalk(id) {
  const ids = getSavedTalkIds();
  setSavedTalkIds(ids.filter((item) => item !== id));
}
