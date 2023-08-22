import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect [counter]')
        document.title = counter.toString()
    }, [counter]) //сработает при изменениях каунтреа

    useEffect(() => {
        console.log('useEffect без зависимостей')
        document.title = counter.toString()
    }) //срабатывает каждый раз при перерисовке

    useEffect(() => {
        console.log('useEffect []')
        document.title = counter.toString()
    }, []) //сработает 1 раз при вмонтировании компоненты


    return (<>
            Hello, {counter} {fake}
        <button onClick={() => setFake(fake+1)}>fake+</button>
        <button onClick={() => setCounter(counter+1)}>counter+</button>

        </>
    )

}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)


    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('settimeout')
    //         document.title = counter.toString()
    //     }, 1000)
    // },[counter])


    useEffect(() => {
        console.log('tick')
        setInterval(() => {
            setCounter(state => state+1)
        }, 1000)
    },[])


    return (<>
            Hello, {counter} -- fake {fake}
            {/*<button onClick={() => setFake(fake+1)}>fake+</button>*/}
            {/*<button onClick={() => setCounter(counter+1)}>counter+</button>*/}

        </>
    )

}

export const TickTack = () => {
    console.log('SetTimeoutExample')

    let date = new Date()
    const [seconds, setSeconds] = useState(date.getSeconds())
    const [minutes, setMinutes] = useState (date.getMinutes())
    const [hours, setHours] = useState(date.getHours())

    // const [seconds, setSeconds] = useState(57)
    // const [minutes, setMinutes] = useState (11)
    // const [hours, setHours] = useState(3)

    const secondsChanger = (state: number) => {
        if (state < 59) {
            return state + 1;
        } else {
            setMinutes((prevMinutes) => minutesChanger(prevMinutes)); // Увеличение минут на 1
            return 0;
        }
    };

    const minutesChanger = (state: number) => {
        if (state < 59) {
            return state + 1;
        } else {
            setMinutes(0); // Сброс минут на 0
            setHours((prevHour) => hoursChanger(prevHour)); // Увеличение часов на 1
            return 0;
        }
    };

    const hoursChanger = (state: number) => {
        if (state < 23) {
            return state + 1;
        } else {
            return 0; // Сброс часов на 0
        }
    };

    useEffect(() => {
        setInterval(() => {
            setSeconds((prevSeconds) => secondsChanger(prevSeconds));
        }, 1000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setMinutes((prevMinutes) => minutesChanger(prevMinutes));
        }, 60000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setHours((prevHours) => hoursChanger(prevHours));
        }, 3600000);
    }, []);

    return (
        <>
            Hours: {hours} Minutes: {minutes} Seconds: {seconds}
        </>
    );
};