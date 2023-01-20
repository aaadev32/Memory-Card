import React from "react";
import { useEffec, useState } from "react";

let scoreState = 0;
let bestScoreState = 0;

function scores(score, bestScore) {
  scoreState = score;
  bestScoreState = bestScore
}
function fetchScores() {
  return [scoreState, bestScoreState];
}
export default { scores, fetchScores } 