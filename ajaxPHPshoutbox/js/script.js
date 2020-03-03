$(document).ready(function(){
    $('#submit').on('click', function(){
        // Setting variables
        var name = $('#name').val();
        var shout = $('#shout').val();
        var date = getDate();  // func that will be created... MySQL date column is text... ---> get timestamp in js !!!
        var dataString = 'name=' + name + '&shout='+ shout + '&date=' + date; 

        // Validation
        if(name == '' || shout == ''){
            alert('Please fill fileds name and shout');
        } else {
            // Ajax Request
            $.ajax({    
                type:"POST",
                url:"../ajaxPHPshoutbox/shoutbox.php",
                data: dataString, 
                cache: false,
                success: function(html){ 
                    $('#shouts ul').prepend(html);
                }
            })
        }
        // Prevent submiting
        return false; 
    })
});

// Format Date like MySQL date
function getDate(){
    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);
    return date;
}