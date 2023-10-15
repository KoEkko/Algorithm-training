interface Node {
  val: number;
  children: Node[] | null;
}

function maxDepth(root: Node | null): number {
  if (root === null) return 0;
  let depth = 0;
  if (root.children!.length > 0) {
    depth = Math.max(...root.children!.map((n) => maxDepth(n)));
  }
  return 1 + depth;
}

