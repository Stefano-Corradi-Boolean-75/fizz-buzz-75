

const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
  
  /** sintassi più parlante */
 /*if(i % 3 === 0 && i % 5 === 0){
    console.log(' -------- fizz-buzz')
  }else if(i % 3 === 0){
    console.log('fizz')
  }else if(i % 5 === 0){
    console.log('buzz')
  }else{
    console.log(i);
  }*/

  /** sintassi più compatta */
 /*if(!(i % 15)){
    console.log(' -------- fizz-buzz')
  }else if(!(i % 3)){
    console.log('fizz')
  }else if(!(i % 5)){
    console.log('buzz')
  }else{
    console.log(i);
  }*/

  // solozione (meno buona) senza else if
  /*let output = i;

  if(i % 3 === 0) output = 'fizz';
  if(i % 5 === 0) output = 'buzz';
  if(i % 15 === 0) output = '----- fizz-buzz';

  console.log(output);*/

  const box = document.createElement('div');
  box.className = 'box';
  
  if(!(i % 15)){
    box.innerHTML = 'FIZZ_BUZZ';
    box.classList.add('fizz-buzz');
  }else if(!(i % 3)){
    box.innerHTML = 'FIZZ';
    box.classList.add('fizz');
  }else if(!(i % 5)){
    box.innerHTML = 'BUZZ';
    box.classList.add('buzz');
  }else{
    box.innerHTML = i;
  }
  
  container.append(box);
}
