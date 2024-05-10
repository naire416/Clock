$(document).ready(function() {
    // Function to update the time display
    function updateTime() {
        var now = new Date(); // Get the current date and time
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds(); // Get the current second
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dayOfWeek = days[now.getDay()];
        var months = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
        var month = months[now.getMonth()];
        var date = now.getDate();
        var year = now.getFullYear();
        var formattedDate = month + ' ' + date + ', ' + year; // Format the date
        var time = now.toLocaleTimeString(); // Get the time as a string

        console.log('Updating time: ' + formattedDate + ' ' + time); // Debug: Log time updates

        // Update the #punchcard-head div with the day, date, and time
        // $('#punchcard-head').text(dayOfWeek + ', ' + formattedDate + ' ' + time);

        var tensOfSeconds = Math.floor(seconds / 10);
        var onesOfSeconds = seconds % 10;

        // Update tens and ones of seconds
        $('#punchcard-head35').text(tensOfSeconds);
        $('#punchcard-head36').text(onesOfSeconds);

        //default for class 'grid-item'
        $('.grid-item').css('background-color', '');

        // If today is Wednesday
        if (dayOfWeek === "Wednesday") {
            $('#item1, #item8').css('background-color', 'black');
            $('#itemR2, #item16').css('background-color', 'black');
            $('#itemR3, #item25').css('background-color', 'black');
            $('#itemX4, #item35').css('background-color', 'black');
            $('#itemR5, #item46').css('background-color', 'black');
            $('#item51, #item53').css('background-color', 'black');
            $('#itemR7, #item65').css('background-color', 'black');
            $('#itemR8, #item72').css('background-color', 'black');
            $('#item81, #item89').css('background-color', 'black');
            // Reset if not Wednesday
        }

        if (dayOfWeek === "Thursday") {
                $('#item1, #item4').css('background-color', 'black');
                $('#itemR2, #item19').css('background-color', 'black');
                $('#item21, #item25').css('background-color', 'black');
                $('#itemX4, #item40').css('background-color', 'black');
                $('#item41, #item43').css('background-color', 'black');
                $('#itemR6, #item55').css('background-color', 'black');
                $('#itemR7, #item62').css('background-color', 'black');
                $('#item71, #item79').css('background-color', 'black');
                
                $('#punchcard-head').text('T');
                $('#punchcard-head2').text('H');
                $('#punchcard-head3').text('U'); 
                $('#punchcard-head4').text('R');
                $('#punchcard-head5').text('S');
                $('#punchcard-head6').text('D');
                $('#punchcard-head7').text('A');
                $('#punchcard-head8').text('Y');
                $('#punchcard-head9').text('');
        }

        if (dayOfWeek === "Friday") {
            $('#itemR1, #item7').css('background-color', 'black');
            $('#itemX2, #item20').css('background-color', 'black');
            $('#itemR3, #item30').css('background-color', 'black');
            $('#itemR4, #item35').css('background-color', 'black');
            $('#itemR5, #item42').css('background-color', 'black');
            $('#item51, #item59').css('background-color', 'black');
            
            $('#punchcard-head').text('F');
            $('#punchcard-head2').text('R');
            $('#punchcard-head3').text('I'); 
            $('#punchcard-head4').text('D');
            $('#punchcard-head5').text('A');
            $('#punchcard-head6').text('Y');
            $('#punchcard-head7').text('');
            $('#punchcard-head8').text('');
            $('#punchcard-head9').text('');
    }

        //Months
        if (month==="May"){
            $('#itemX11, #item105').css('background-color', 'black');
            $('#itemR12, #item112').css('background-color', 'black');
            $('#item121, #item129').css('background-color', 'black');

                $('#punchcard-head11').text('M');
                $('#punchcard-head12').text('A');
                $('#punchcard-head13').text('Y'); 
                $('#punchcard-head14').text('');
                $('#punchcard-head15').text('');
                $('#punchcard-head16').text('');
                $('#punchcard-head17').text('');
                $('#punchcard-head18').text('');
                $('#punchcard-head19').text('');
            } else {
        }

        //Date
        if (date===1){
            $('#item201').css('background-color', 'black');
            $('#item212').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('1');
        }
        if (date===2){
            $('#item201').css('background-color', 'black');
            $('#item213').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('2');
        }
        if (date===3){
            $('#item201').css('background-color', 'black');
            $('#item214').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('3');
        }
        if (date===4){
            $('#item201').css('background-color', 'black');
            $('#item215').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('4');
        }
        if (date===5){
            $('#item201').css('background-color', 'black');
            $('#item216').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('5');
        }
        if (date===6){
            $('#item201').css('background-color', 'black');
            $('#item217').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('6');
        }
        if (date===7){
            $('#item201').css('background-color', 'black');
            $('#item218').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('7');
        }
        if (date===8){
            $('#item201').css('background-color', 'black');
            $('#item219').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('8');
        }
        if (date===9){
            $('#item201').css('background-color', 'black');
            $('#item220').css('background-color', 'black');
            $('#punchcard-head21').text('0');
            $('#punchcard-head22').text('9');
        }
        if (date===10){
            $('#item202, #item211').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('0');
        }
        if (date===11){
            $('#item202, #item212').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('1');
        }
        if (date===12){
            $('#item202, #item213').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('2');
        }
        if (date===13){
            $('#item202, #item214').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('3');
        }
        if (date===14){
            $('#item202, #item215').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('4');
        }
        if (date===15){
            $('#item202, #item216').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('5');
        }
        if (date===16){
            $('#item202, #item217').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('6');
        }
        if (date===17){
            $('#item202, #item218').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('7');
        }
        if (date===18){
            $('#item202, #item219').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('8');
        }
        if (date===19){
            $('#item202, #item220').css('background-color', 'black');
            $('#punchcard-head21').text('1');
            $('#punchcard-head22').text('9');
        }
        if (date===20){
            $('#item203, #item221').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('0');
        }
        if (date===21){
            $('#item203, #item222').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('1');
        }
        if (date===22){
            $('#item203, #item223').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('2');
        }
        if (date===23){
            $('#item203, #item224').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('3');
        }
        if (date===24){
            $('#item203, #item225').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('4');
        }
        if (date===25){
            $('#item203, #item226').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('5');
        }
        if (date===26){
            $('#item203, #item227').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('6');
        }
        if (date===27){
            $('#item203, #item228').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('7');
        }
        if (date===28){
            $('#item203, #item229').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('8');
        }
        if (date===29){
            $('#item203, #item230').css('background-color', 'black');
            $('#punchcard-head21').text('2');
            $('#punchcard-head22').text('9');
        }
        if (date===30){
            $('#item204, #item231').css('background-color', 'black');
            $('#punchcard-head21').text('3');
            $('#punchcard-head22').text('0');
        }
        if (date===31){
            $('#item204, #item232').css('background-color', 'black');
            $('#punchcard-head21').text('3');
            $('#punchcard-head22').text('1');
        }

        //Year

        if (year===2024){
            $('#item233').css('background-color', 'black');
            $('#item241').css('background-color', 'black');
            $('#item253').css('background-color', 'black');
            $('#item265').css('background-color', 'black');
            $('#punchcard-head24').text('2');
            $('#punchcard-head25').text('0');
            $('#punchcard-head26').text('2');
            $('#punchcard-head27').text('4');
        }

        switch (hours) {
            //    column 29, 30
                case 0:
                    $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item292, #item293, #item294, #item295, #item296, #item297, #item298, #item299, #item300').css('background-color', 'white');
                     $('#item281, #item291').css('background-color', 'black');
                     $('#punchcard-head29').text('0');
                     $('#punchcard-head30').text('0');
                    break;
                case 1:
                    $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item293, #item294, #item295, #item296, #item297, #item298, #item299, #item300').css('background-color', 'white');
                     $('#item281, #item292').css('background-color', 'black');
                     $('#punchcard-head29').text('0');
                     $('#punchcard-head30').text('1');
                    break;

                case 5:
                    $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item292, #item293, #item294, #item295, #item297, #item298, #item299, #item300').css('background-color', 'white');
                    $('#item281, #item296').css('background-color', 'black');
                    $('#punchcard-head29').text('0');
                    $('#punchcard-head30').text('5');
                    break;
                case 6:
                    $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item292, #item293, #item294, #item295, #item296, #item298, #item299, #item300').css('background-color', 'white');
                    $('#item281, #item297').css('background-color', 'black');
                    $('#punchcard-head29').text('0');
                    $('#punchcard-head30').text('6');
                    break;
                case 7:
                    $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item292, #item293, #item294, #item295, #item296, #item297, #item299, #item300').css('background-color', 'white');
                    $('#item281, #item298').css('background-color', 'black');
                    $('#punchcard-head29').text('0');
                    $('#punchcard-head30').text('7');
                    break;
                case 8:
                        $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                        $('#item291, #item292, #item293, #item294, #item295, #item296, #item297, #item298, #item300').css('background-color', 'white');
                        $('#item281, #item299').css('background-color', 'black');
                        $('#punchcard-head29').text('0');
                        $('#punchcard-head30').text('8');
                        break;
                case 9:
                        $('#item282, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                        $('#item291, #item292, #item293, #item294, #item295, #item296, #item297, #item298, #item299').css('background-color', 'white');
                        $('#item281, #item230').css('background-color', 'black');
                        $('#punchcard-head29').text('0');
                        $('#punchcard-head30').text('9');
                        break;
                case 10:
                    $('#item281, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item292, #item293, #item294, #item295, #item296, #item297, #item298, #item299, #item300').css('background-color', 'white');
                     $('#item282, #item291').css('background-color', 'black');
                     $('#punchcard-head29').text('1');
                     $('#punchcard-head30').text('0');
                    break;
                case 11:
                    $('#item281, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item293, #item294, #item295, #item296, #item297, #item298, #item299, #item300').css('background-color', 'white');
                     $('#item282, #item292').css('background-color', 'black');
                     $('#punchcard-head29').text('1');
                     $('#punchcard-head30').text('1');
                    break;
                case 12:
                    $('#item281, #item283, #item284, #item285, #item286, #item287, #item288, #item289, #item290').css('background-color', 'white');
                    $('#item291, #item292, #item294, #item295, #item296, #item297, #item298, #item299, #item300').css('background-color', 'white');
                     $('#item282, #item293').css('background-color', 'black');
                     $('#punchcard-head29').text('1');
                     $('#punchcard-head30').text('2');
                    break;
        }

        switch (minutes) {
            //    column 32, 33
                case 0:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('0');
                    break;
                case 1:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('1');
                    break;
                case 2:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('2');
                    break;
                case 3:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('3');
                    break;
                case 4:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('4');
                    break;
                case 5:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('5');
                    break;
                case 6:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('6');
                    break;
                case 7:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item311, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('7');
                    break;
                case 8:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item311, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('8');
                    break;
                case 9:
                    $('#item312, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item311, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('0');
                     $('#punchcard-head33').text('9');
                    break;
                case 10:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('0');
                    break;
                case 11:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('1');
                    break;
                case 12:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('2');
                    break;
                case 13:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('3');
                    break;
                case 14:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('4');
                    break;
                case 15:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('5');
                    break;
                case 16:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('6');
                    break;
                case 17:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item312, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('7');
                    break;
                case 18:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item312, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('8');
                    break;
                case 19:
                    $('#item311, #item313, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item312, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('1');
                     $('#punchcard-head33').text('9');
                    break;
                case 20:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('0');
                   break;
                case 21:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('1');
                   break;
                case 22:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('2');
                   break;
                case 23:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('3');
                   break;
                case 24:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('4');
                   break;
                case 25:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('5');
                   break;
                case 26:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('6');
                   break;
                case 27:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item313, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('7');
                   break;
                case 28:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item313, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('8');
                   break;
                case 29:
                    $('#item311, #item312, #item314, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item313, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('2');
                     $('#punchcard-head33').text('9');
                   break;
                case 30:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('0');
                   break;
                case 31:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('1');
                   break;
                case 32:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('2');
                   break;
                case 33:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('3');
                   break;
                case 34:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('4');
                    break;
                case 35:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('5');
                    break;
                case 36:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('6');
                    break;
                case 37:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item314, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('7');
                    break;
                case 38:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item314, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('8');
                    break;
                case 39:
                    $('#item311, #item312, #item313, #item315, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item314, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('3');
                     $('#punchcard-head33').text('9');
                    break;
                case 40:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('0');
                    break;
                case 41:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('1');
                    break;
                case 42:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('2');
                    break;
                case 43:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('3');
                    break;
                case 44:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('4');
                    break;
                case 45:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('5');
                    break;
                case 46:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('6');
                    break;
                case 47:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item315, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('7');
                    break;
                 case 48:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item315, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('8');
                    break;
                 case 49:
                    $('#item311, #item312, #item313, #item314, #item316, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item315, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('4');
                     $('#punchcard-head33').text('9');
                    break;
                case 50:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item321').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('0');
                    break;
                case 51:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item323, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item322').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('1');
                    break;
                case 52:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item324, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item323').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('2');
                    break;
                case 53:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item325, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item324').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('3');
                    break;
                case 54:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item326, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item325').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('4');
                    break;
                case 55:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item327, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item326').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('5');
                    break;
                case 56:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item328, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item327').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('6');
                    break;
                case 57:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item329, #item330').css('background-color', 'white');
                     $('#item316, #item328').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('7');
                    break;
                 case 58:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item330').css('background-color', 'white');
                     $('#item316, #item329').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('8');
                    break;
                 case 59:
                    $('#item311, #item312, #item313, #item314, #item315, #item317, #item318, #item319, #item320').css('background-color', 'white');
                    $('#item321, #item322, #item323, #item324, #item325, #item326, #item327, #item328, #item329').css('background-color', 'white');
                     $('#item316, #item330').css('background-color', 'black');
                     $('#punchcard-head32').text('5');
                     $('#punchcard-head33').text('9');
                    break;
        }

        // Conditional formatting based on the current second
        switch (seconds) {
        //    column 35, 36
            case 0:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item341, #item351').css('background-color', 'black');
                break;
            case 1:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item341, #item352').css('background-color', 'black');
                break;
            case 2:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item341, #item353').css('background-color', 'black');
                break;
            case 3:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item341, #item354').css('background-color', 'black');
                break;
            case 4:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item341, #item355').css('background-color', 'black');
                break;
            case 5:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item341, #item356').css('background-color', 'black');
                break;
            case 6:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item341, #item357').css('background-color', 'black');
                break;
            case 7:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item341, #item358').css('background-color', 'black');
                break;
            case 8:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item341, #item359').css('background-color', 'black');
                break;
            case 9:
                $('#item342, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item340').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359').css('background-color', 'white');
                $('#item341, #item360').css('background-color', 'black');
                break;
            case 10:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item342, #item351').css('background-color', 'black');
                break;
            case 11:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item342, #item352').css('background-color', 'black');
                break;
            case 12:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item342, #item353').css('background-color', 'black');
                break;
            case 13:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item342, #item354').css('background-color', 'black');
                break;
            case 14:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item342, #item355').css('background-color', 'black');
                break;
            case 15:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item342, #item356').css('background-color', 'black');
                break;
            case 16:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item342, #item357').css('background-color', 'black');
                break;
            case 17:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item342, #item348').css('background-color', 'black');
                break;
            case 18:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item342, #item359').css('background-color', 'black');
                break;
            case 19:
                $('#item341, #item343, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359').css('background-color', 'white');
                $('#item342, #item360').css('background-color', 'black');
                break;
            case 20:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item343, #item351').css('background-color', 'black');
                break;
            case 21:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item343, #item352').css('background-color', 'black');
                break;
            case 22:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item343, #item353').css('background-color', 'black');
                break;
            case 23:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item343, #item354').css('background-color', 'black');
                break;
            case 24:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item343, #item355').css('background-color', 'black');
                break;
            case 25:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item343, #item356').css('background-color', 'black');
                break;
            case 26:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item343, #item357').css('background-color', 'black');
                break;
            case 27:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item343, #item358').css('background-color', 'black');
                break;
            case 28:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item343, #item359').css('background-color', 'black');
                break;
            case 29:
                $('#item341, #item342, #item344, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item343, #item360').css('background-color', 'black');
                break;
            case 30:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item344, #item351').css('background-color', 'black');
                break;
            case 31:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item344, #item352').css('background-color', 'black');
                break;
            case 32:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item344, #item353').css('background-color', 'black');
                break;
            case 33:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item344, #item354').css('background-color', 'black');
                break;
            case 34:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item344, #item355').css('background-color', 'black');
                break;
            case 35:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item344, #item356').css('background-color', 'black');
                break;
            case 36:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item344, #item357').css('background-color', 'black');
                break;
            case 37:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item344, #item358').css('background-color', 'black');
                break;
            case 38:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item344, #item359').css('background-color', 'black');
                break;
            case 39:
                $('#item341, #item342, #item343, #item345, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359').css('background-color', 'white');
                $('#item344, #item360').css('background-color', 'black');
                break;
            case 40:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item345, #item351').css('background-color', 'black');
                break;
            case 41:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item345, #item352').css('background-color', 'black');
                break;
            case 42:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item345, #item353').css('background-color', 'black');
                break;
            case 43:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item345, #item354').css('background-color', 'black');
                break;
            case 44:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item345, #item355').css('background-color', 'black');
                break;
            case 45:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item345, #item356').css('background-color', 'black');
                break;
            case 46:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item345, #item357').css('background-color', 'black');
                break;
            case 47:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item345, #item358').css('background-color', 'black');
                break;
            case 48:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item345, #item359').css('background-color', 'black');
                break;
            case 49:
                $('#item341, #item342, #item343, #item344, #item346, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359').css('background-color', 'white');
                $('#item345, #item360').css('background-color', 'black');
                break;
            case 50:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item346, #item351').css('background-color', 'black');
                break;
            case 51:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item353, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item346, #item352').css('background-color', 'black');
                break;
            case 52:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item354, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item346, #item353').css('background-color', 'black');
                break;
            case 53:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item355, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item346, #item354').css('background-color', 'black');
                break;
            case 54:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item356, #item357, #item358, #item359, #item360').css('background-color', 'white');
                 $('#item346, #item355').css('background-color', 'black');
                break;
            case 55:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item357, #item358, #item359, #item360').css('background-color', 'white');
                $('#item346, #item356').css('background-color', 'black');
                break;
            case 56:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item358, #item359, #item360').css('background-color', 'white');
                $('#item346, #item357').css('background-color', 'black');
                break;
            case 57:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item359, #item360').css('background-color', 'white');
                $('#item346, #item358').css('background-color', 'black');
                break;
            case 58:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item360').css('background-color', 'white');
                $('#item346, #item359').css('background-color', 'black');
                break;
            case 59:
                $('#item341, #item342, #item343, #item344, #item345, #item347, #item348, #item349, #item350').css('background-color', 'white');
                $('#item351, #item352, #item353, #item354, #item355, #item356, #item357, #item358, #item359').css('background-color', 'white');
                $('#item346, #item360').css('background-color', 'black');
                break;
            default:
                $('#item321, #item322, #item323, #item324, #item325, #item325, #item326, #item327, #item328, #item329, #item330, #item331, #item332, #item333, #item334, #item335, #item336, #item337, #item338, #item339, #item340').css('background-color', '');
                break;
        }

        //Hours
        switch (hours) {
            case 12:
                $('#item12').css('background-color', 'black');
                break;
            case 13:
                $('#item13').css('background-color', 'black');
                break;
            // Add more cases as needed
        }
    }
        
    
        // Conditional formatting based on the current minute
        //  switch (minutes) {
        //     //    column 30, 31
        //     case 40:
        //         $('#item291, #item292, #item293, #item294, #item296, #item297, #ite298, #item299, #item300').css('background-color', 'white');
        //         $('#item302, #item303, #item304, #item305, #item306, #item307, #item308, #item309, #item310').css('background-color', 'white');
        //          $('#item295, #item301').css('background-color', 'black');
        //         break;
                
        //     default:
        //         $('#item291, #item292, #item293, #item294, #item295, #item296, #item297, #ite298, #item299, #item300, #item301, #item302,#item303, #item304, #item305, #item306, #item307, #item308, #item309, #item310').css('background-color', '');
        //         break;
        //     }


    // Update the time immediately and every second thereafter
    updateTime();
    setInterval(updateTime, 1000);

});