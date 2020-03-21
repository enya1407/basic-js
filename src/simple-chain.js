const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {},
  removeLink(position) {
    if (typeof position !== "number") throw new Error[RangeError]();
  },
  reverseChain() {},
  finishChain() {},
};

module.exports = chainMaker;