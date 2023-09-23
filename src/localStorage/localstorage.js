const getFromLocalStorage =()=>{
    let cart = []
    const storedData = localStorage.getItem('jobApplications')
    if(storedData){
        cart = JSON.parse(storedData)
       
    }
    return cart;
    
}
const addToLOcalStorage =id=>{
    
  const cart =  getFromLocalStorage()
  const isPresent = cart.find(itemId=>itemId === id)

  if(!isPresent){
    cart.push(id)
    localStorage.setItem('jobApplications',JSON.stringify(cart))
  }
}
export {getFromLocalStorage,addToLOcalStorage}