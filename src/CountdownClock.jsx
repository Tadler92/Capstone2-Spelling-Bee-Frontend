import { useState, useEffect, useRef } from "react";


const CountdonwClock = ({duration}) => {
  const Ref = useRef(null);

  const [clock, setClock] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    // console.log('"e" in "getTimeRemaining" for countdonw', e);
    const total = Date.parse(e) - Date.parse(new Date());
    // console.log('"total" in "getTimeRemaining" for countdonw', total);

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds
    };
  };

  const startTimer = (e) => {
    // console.log('"e" in "startTimer" for countdonw', e);

    let {total, hours, minutes, seconds} = getTimeRemaining(e);

    if (total >= 0) {
      setClock(
        `${hours > 9 ? hours : `0${hours}`}:
        ${minutes > 9 ? minutes : `0${minutes}`}:
        ${seconds > 9 ? seconds : `0${seconds}`}`
      );
    };
  };

  const clearTimer = (e) => {
    setClock(`${duration.hours()}: ${duration.minutes()}: ${duration.seconds()}`);

    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);

    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // deadline.setHours(deadline.getHours() + 5);
    deadline.setHours(deadline.getHours() + duration.hours());
    // deadline.setMinutes(deadline.getMinutes() + 1);
    deadline.setMinutes(deadline.getMinutes() + duration.minutes());
    // deadline.setSeconds(deadline.getSeconds() + 10);
    deadline.setSeconds(deadline.getSeconds() + duration.seconds());
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div>
      <h1>Time Till Next Word:</h1>
      <h3>{clock}</h3>
      <button onClick={onClickReset}>Reset</button>
    </div>
  )
};


export default CountdonwClock;