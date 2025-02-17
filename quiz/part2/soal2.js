function urutkanAbjad(str) {
    let pecah = str.split('');

    for (let i = 0; i < pecah.length; i++) {
        for (let j = 0; j < pecah.length - 1; j++) {
            if (pecah[j] > pecah[j + 1]) {
                [pecah[j], pecah[j + 1]] = [pecah[j + 1], pecah[j]]
            }
        }
    }
    return pecah.join('')
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'