let output

const getJokes = (e) => {
   const number = document.getElementById('number').value

   const xhr = new XMLHttpRequest()

   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

   xhr.onload = function() {
      if(this.status === 200) {
         const res = JSON.parse(this.responseText)

         output =''

         if(res.type === 'success') {
            res.value.forEach(joke => {
               output += `<li>${joke.joke}</li>`
            });
         }
         else {
            output += `<h1>YOU BROKE SOME SHIT</h1>`
         }
      }

      document.getElementById('jokes').innerHTML = output
   }

   xhr.send()

   e.preventDefault()
}

document.getElementById('get-jokes').addEventListener('click', getJokes)
