/*
    convertTimeToWords
        Inputs: int, int
        Outputs: null
        Description: This function takes two integer inputs and uses those values to output a string that is a text representation of the time.
*/
function convertTimeToWords( hours, minutes )
{

    //Remove leading zero, if placed
    if( minutes == 00 ) 
        minutes = '0';
        
    //If either input is outside of the valid ranges (1-12 for hours; 0-59 for minutes) report error and stop computing
    if( !( hours <= 12 && hours >= 1 ) || !( minutes <= 59 && minutes >= 0 ) || isNaN( hours ) || isNaN( minutes )  )
    {
        //Display error instead of time
        document.getElementById('time').innerHTML = "Incomputable!";
        
        //Exit convertTimeToWords function
        return;
    }
    
    //Array that contains conversions for all numbers into their text counterpart
    var textNumbers = [ "NULL", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty",
        "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five",
        "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine" ];

    //This switch case handles special cases for the hour (0, 1/4,1/2, and 3/4) and provides different text outputs/phrasing for each
    switch( minutes )
    {
    
        case '0':
            //If the minutes are 00, output O'Clock
            document.getElementById('time').innerHTML = `${ textNumbers[hours] } O\`Clock`;
            break;
        case '15':
            //If the minutes are 15, output Quarter past current hour
            document.getElementById('time').innerHTML = `Quarter past ${ textNumbers[hours] }`;
            break;
        case '30':
            //If the minutes are 30, output Half past current hour
            document.getElementById('time').innerHTML = `Half past ${ textNumbers[hours] }`;
            break;
        case '45':
            //If the minutes are 45, output Quarter to next hour
            document.getElementById('time').innerHTML = `Quarter to ${ textNumbers[( (hours % 12) + 1 )] }`;
            break;
        default:
            //If only one minute has passed in the hour or it is the last, write the word 'minute', otherwise write the plural 'minutes'
            adds = `${ ( ( minutes > 1 ) && ( minutes < 59 ) ) ? ' minutes' : ' minute' }`;
            //for all other times, output the current minutes to/past the next/current hour.
            document.getElementById('time').innerHTML = `${ minutes>30 ? ( textNumbers[(60-minutes)] + adds + ' to ' + textNumbers[( (hours % 12) + 1 )] ) : textNumbers[minutes] + adds + ' past ' + textNumbers[hours] }`;
    
    }  

}


/* Listeners to when input boxes are updated to run convertTimeToWords function */
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