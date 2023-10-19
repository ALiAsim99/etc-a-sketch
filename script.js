const grid=document.querySelector('.grid')
const setGridButton=document.querySelector('button')
function changeColor(e){

  e.target.style='background-color:black';
}

const setGrid=(size)=>{
  console.log(size)
  grid.style.gridTemplateColumns=`repeat(${size},1fr)`
  grid.style.gridTemplateRows=`repeat(${size},1fr)`

  for(let i=0;i<size*size;i++){
    const gridElement=document.createElement('div')
    gridElement.classList.add('grid-element')
    grid.addEventListener('mouseover',changeColor)
    grid.appendChild(gridElement)

  }
}
setGridButton.addEventListener('click',()=>{
  let ans;
  
  ans=+prompt("Please select grid size")
 if(ans<100){
  grid.textContent=' '
  setGrid(ans)
 }
 else{
  ans=+prompt("Please select grid size")

 }
  
}

  )

window.onload=()=>{
  setGrid(16)
}
