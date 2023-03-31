const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1]
  ];
  
  function getPossibleMoves(position) {
    const [row, col] = position;
    const possibleMoves = moves
      .map(move => [row + move[0], col + move[1]])
      .filter(move => move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8);
    return possibleMoves;
  }
  
  function getDistance(position1, position2) {
    const [row1, col1] = position1;
    const [row2, col2] = position2;
    const distance = Math.sqrt(Math.pow(row1 - row2, 2) + Math.pow(col1 - col2, 2));
    return distance;
  }
  
  export function findShortestPath(start, end) {
    const queue = [{ position: start, path: [start] }];
    const visited = new Set();
    while (queue.length > 0) {
      const { position, path } = queue.shift();
      if (position[0] === end[0] && position[1] === end[1]) {
        let pathFormatted = ''
        let indent = ''
        for (let i = 0; i < path.length; i++) {
            pathFormatted += `${indent}${path[i]} \n`
            indent += ' '
        }
        return `You made it in ${path.length} moves! Here's your path: \n${pathFormatted}`;
      }
      if (visited.has(`${position[0]},${position[1]}`)) {
        continue;
      }
      visited.add(`${position[0]},${position[1]}`);
      const possibleMoves = getPossibleMoves(position);
      possibleMoves.forEach(move => {
        const newPath = path.concat([move]);
        const distance = getDistance(move, end);
        queue.push({ position: move, path: newPath, distance });
      });
      queue.sort((a, b) => a.distance - b.distance);
    }
    return null;
  }