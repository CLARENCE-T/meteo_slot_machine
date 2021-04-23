import SlotMachine from 'jquery-slotmachine/lib/slot-machine.js'

const meteoMachine = () => {
  // const btnShuffle = document.querySelector('#randomizeButton');
  // const results = {
  //   machine1: document.querySelector('#machine1Result'),
  //   machine2: document.querySelector('#machine2Result'),
  //   machine3: document.querySelector('#machine3Result')
  // };
  // const el1 = document.querySelector('#machine1');
  // const el2 = document.querySelector('#machine2');
  // const el3 = document.querySelector('#machine3');
  // const machine1 = new SlotMachine(el1, { active: 2,   delay: 850,
  // auto: false, spins: 4});
  // const machine2 = new SlotMachine(el2, { active: 0,   delay: 850,
  // auto: false, spins:  4});
  // const machine3 = new SlotMachine(el3, { active: 0,   delay: 850,
  // auto: false, spins: 4 });

  // function onComplete(active){
  //   results[this.element.id].innerText = `Index: ${this.active}`;
  // }

  // btn.addEventListener('click', () => {
  //   machine1.shuffle(5, onComplete);
  //   setTimeout(() => machine2.shuffle(5, onComplete), 500);
  //   setTimeout(() => machine3.shuffle(5, onComplete), 1000);
  // });






  let count = 0;
  const btnShuffle = document.querySelector('#casinoShuffle');
  const btnStop = document.querySelector('#casinoStop');
  const casino1 = document.querySelector('#casino1');
  const casino2 = document.querySelector('#casino2');
  const casino3 = document.querySelector('#casino3');
  const mCasino1 = new SlotMachine(casino1, {
    active: 0,
    delay: 500
  });
  const mCasino2 = new SlotMachine(casino2, {
    active: 1,
    delay: 500
  });
  const mCasino3 = new SlotMachine(casino3, {
    active: 2,
    delay: 500
  });

  btnShuffle.addEventListener('click', () => {
    count = 3;
    mCasino1.shuffle(9999);
    mCasino2.shuffle(9999);
    mCasino3.shuffle(9999);
  });

  btnStop.addEventListener('click', () => {
    switch(count) {
      case 3:
        mCasino1.stop();
        break;
      case 2:
        mCasino2.stop();
        break;
      case 1:
        mCasino3.stop();
        break;
    }
    count--;
  });

}



export default meteoMachine
