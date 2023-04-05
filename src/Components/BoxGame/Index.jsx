import React from "react";
import "./BoxGame.scss"
import Options from "./Options";


const BoxGame = ({ guide, movimientos, aciertos, playerOption, botOption, gameState, setGameState, }) => {


  return (
    <>
      <div className="boxGuide">
        <span>{guide}</span>
      </div>
      <div className="informacion">
        <p id="aciertos" className="estadisticas">Aciertos: {aciertos}</p>
        <p id="movimientos" className="estadisticas">Movimientos: {movimientos}</p>
      </div>
      <div className="boxDuel">
        <div className="definitiveOption" > {playerOption} </div>
        <div className="vs">VS</div>
        <div className="definitiveOption"> {botOption} </div>
      </div>

      <Options
        gameState={gameState}
        setGameState={setGameState} />

    </>
  )
}
export default BoxGame;