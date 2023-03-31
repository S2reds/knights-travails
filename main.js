import { findShortestPath } from "./knightMoves.js";

const start = [0,0];
const end = [4,7];
const shortestPath = findShortestPath(start, end);
console.log(shortestPath);

const start1 = [4,3]
const end1 = [2,7]
const path = findShortestPath(start1,end1)
console.log(path)