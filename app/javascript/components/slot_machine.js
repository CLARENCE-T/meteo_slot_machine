import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js'

const meteoMachine = () => {
  const songResult = document.querySelector('#songResult')
  let click = 0;
  let resultSong = document.querySelector('#resultSong')
  let count = 0;
  const btnStop = document.querySelector('#casinoStop');
  const btn = document.querySelector('#casinoShuffle');
  const el1 = document.querySelector('#machineClock');
  const el2 = document.querySelector('#machineWeather');
  const el3 = document.querySelector('#machinePlace');
  const machineClock = new SlotMachine(el1, { active: 0 });
  const machineWeather = new SlotMachine(el2, { active: 1 });
  const machinePlace = new SlotMachine(el3, { active: 0 });
  const results = {
    machineClock: '',
    machineWeather: '',
    machinePlace: ''
  };


  function onComplete(active){
    results[this.element.id] = `${this.element.querySelector(`.slot${this.active}`).dataset.name}`;
  }

  btn.addEventListener('click', () => {
    if (click === 0) {
      machineClock.shuffle(9999);
      machineWeather.shuffle(9999);
      machinePlace.shuffle(9999);
      count = 3;
      click ++;
    }
  });

  btnStop.addEventListener('click', () => {
    switch(count) {
      case 3:
        machineClock.stop(onComplete);
        break;
      case 2:
        machineWeather.stop(onComplete);
        break;
      case 1:
        machinePlace.stop(onComplete);
        click = 0

        setTimeout(() => {
          fetch("http://localhost:3000/songs")
          .then(response => response.json())
          .then((data) => {
            const arrayResult = data.find(e =>  e.clock === results.machineClock && e.place === results.machinePlace && e.weather === results.machineWeather );
            console.log(arrayResult)
            if (arrayResult){
              resultSong.innerText = arrayResult.name
              resultSong.href = arrayResult.url
            }
          })
        }, 500)
        break;
    }
    count--;
  });
}



export default meteoMachine
