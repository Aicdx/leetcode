const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};

//先序遍历

function preOrder(root) {
  if (!root) {
    return;
  }
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

//中序

function midOrder(root) {
  if (!root) {
    return;
  }
  midOrder(root.left);
  console.log(root.val);
  midOrder(root.right);
}

// midOrder(root);

//后序

function nextOrder(root) {
  if (!root) {
    return;
  }
  nextOrder(root.left);
  nextOrder(root.right);
  console.log(root.val);
}
nextOrder(root)