import React, {FC, useCallback, useEffect, useRef} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
  currentPlayer: Player;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = React.useState(300);
  const [whiteTime, setWhiteTime] = React.useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback = currentPlayer.color === 'black' ? decreaseBlackTime : decreaseWhiteTime;
    timer.current = setInterval(callback, 1000);
  }, [currentPlayer]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  function decreaseBlackTime() {
    setBlackTime(prev => prev - 1);
  }

  function decreaseWhiteTime() {
    setWhiteTime(prev => prev - 1);
  }

  function handleRestart() {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  }


  return (
    <div className="timers">
      <div>
        <button className="restart" onClick={handleRestart}>Restart</button>
      </div>
      <div className="player-timers">
        <div className={['timer', 'timer-black', currentPlayer.color === Colors.DARK ? 'timer-black-active' : ''].join(' ')}>
          {blackTime}
        </div>
        <div className={['timer', 'timer-white', currentPlayer.color === Colors.LIGHT ? 'timer-white-active' : ''].join(' ')}>
          {whiteTime}
        </div>
      </div>
    </div>
  );
};

export default Timer;