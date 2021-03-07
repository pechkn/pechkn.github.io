# Сoncepts of computer science

Probably the most important part of computer science is **algorithms**. And here they are:

- *Binary Search* finds index of target number in sorted array of other numbers by dividing it on two halves on each iteration. Efficiency is O(log<sub>2</sub>(n)),
where *n* is array length.
```
  let low = 0, high = arr.length
  while (low <= high) {
    let mid = (low + high) / 2
    if (target == arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
```

- *Breadth-First Search (BFS)* searches tree or graph data structure by checking neighbours of nodes level by level. Efficiency is O(v + e), where *v* and *e* are
amounts of graph vertices and edges respectively
```
  
```

- *Depth-first Search (DFS)* searches tree or graph data structure by checking node branches as far as possible one by one. Efficiency is O(v + e), where *v* and *e* are
amounts of graph vertices and edges respectively.
```

```
