function convertTimeToWords( hours, minutes )
{

    if( !( hours <= 12 && hours >= 1 ) || isNaN( hours ) )
    {
        document.getElementById('time').innerHTML = "Incomputable!";
        return;
    }
    
    if( !( minutes <= 59 && minutes >= 0 ) || isNaN( minutes ) )
    {
        document.getElementById('time').innerHTML = "Incomputable!";
        return;
    }
    
    var textNumbers = [ "NULL", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty",
        "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five",
        "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine" ];

   // document.getElementById('time').innerHTML = `${ textNumbers[hours] } o\`clock`;
    
    switch( minutes )
    {
    
        case '0':
            document.getElementById('time').innerHTML = `${ textNumbers[hours] } o\`clock`;
            break;
        case '15':
            document.getElementById('time').innerHTML = `Quarter past ${ textNumbers[hours] }`;
            break;
        case '30':
            document.getElementById('time').innerHTML = `Half past ${ textNumbers[hours] }`;
            break;
        case '45':
            document.getElementById('time').innerHTML = `Quarter to ${ textNumbers[( (hours % 12) + 1 )] }`;
            break;
        default:
            adds = `${ ( ( minutes > 1 ) && ( minutes < 59 ) ) ? ' minutes' : ' minute' }`;
            document.getElementById('time').innerHTML = `${ minutes>30 ? ( textNumbers[(60-minutes)] + adds + ' to ' + textNumbers[( (hours % 12) + 1 )] ) : textNumbers[minutes] + adds + ' past ' + textNumbers[hours] }`;
    
    }  

}

hour.addEventListener( "input", function (e) 
{

    hour = document.getElementById( 'hour' ).value;      
    min  = document.getElementById( 'minute' ).value;
    convertTimeToWords( hour, min );

});

minute.addEventListener( "input", function (e) 
{

    hour = document.getElementById( 'hour' ).value;      
    min  = document.getElementById( 'minute' ).value;
    convertTimeToWords( hour, min );

});

minute.addEventListener( "load", function (e) 
{

    hour = document.getElementById( 'hour' ).value;      
    min  = document.getElementById( 'minute' ).value;
    convertTimeToWords( hour, min );

});