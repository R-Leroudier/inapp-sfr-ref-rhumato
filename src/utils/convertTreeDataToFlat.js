// Import
const fs = require("fs-extra");
const data = require("../../public/dataTree.json");

let flatEntries = [];
/**
 * This function convert data nested to data unested
 * @param {Array} entries
 */
const treeConvertedToFlat = entries => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    let children = entry.children;

    if (children) {
      treeConvertedToFlat(children);
      children = [];
      flatEntries.push(entry);
    } else {
      children = [];
      flatEntries.push(entry);
    }
  }
  return flatEntries;
};

const dataConverted = treeConvertedToFlat(data.tree);

fs.writeJsonSync(`./dataFlat.json`, JSON.stringify(dataConverted, null, "/t"));
console.log(typeof dataConverted);
