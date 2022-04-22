let pets = new Array(5);
for (let id = -20; id != 20 ; id++) {
console.log(id, id > -1 && id < pets.length? id : (id - (id < 0 ? -1 : 1)*pets.length*(Math.floor(id/pets.length))))

}


