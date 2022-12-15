import React from 'react'
import { BackLink, ScoreInRound } from '../components'
import { useAppSelector } from '../services/hooks/useState';
import { GameProcess } from '../types/game';
import { authorization } from '../utils';

export const ScoreInRoundPage: React.FC = (): JSX.Element => {
  const process: GameProcess = useAppSelector(state => state.gameProcess);
  
  authorization();
  return (
    <>
      <header>
        <BackLink text={process.roundCount + ' раунд'} />
      </header>
      <main>
        <ScoreInRound />
      </main>
    </>
  )
}
