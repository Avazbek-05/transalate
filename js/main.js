let leftLang  = document.getElementById("leftLang")
let rightLang  = document.getElementById("rightLang")

let leftText = document.getElementById("leftText")
let rightText = document.getElementById("rightText")

let translateBtn = document.getElementById("translateBtn")




translateBtn.addEventListener("click", async ()=>{

  let left_lang_value = leftLang.value
  let right_lang_value = rightLang.value
  let left_text_value = leftText.value
  let tayyornatija =  await translateFunc(left_lang_value , right_lang_value , left_text_value)
  
  rightText.value = tayyornatija


})

 function translateFunc(shundan , bunga , shutextni){

  return fetch(`https://lingva.ml/api/v1/${shundan}/${bunga}/${shutextni}`)
  .then(data => data.json())
  .then( data => {
  return data.translation
  })
  .catch(err => console.log(err))

}

