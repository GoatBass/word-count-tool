$(function(){
    $('button').click(function(event){
        event.preventDefault();

        let word = $('#str').val()
        let cont = 0
        
        
        for(let i = 0; i < word.length; i++){
            console.log(cont++)
        }

        $('#output').html(`<h1>${cont}</h1>`)
        
    })
})