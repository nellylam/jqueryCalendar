$(document).ready(function() {

	var days = [
		{
			name : 'Ind Day',
			day : 16
		},
		{
			name : 'Labor Day',
			day : 1
		}
	];

    var t = $('table');
    t.addClass('classy');

    // create function to insert things into the calendar
    function insertEvent(name, day){
		if (name.length) {
			console.log('name is ' + name);
		} else {
			console.error('no name given');
			return; //this exits the function if no name given
		}

		console.log(day);

		if (day > 0) {
			console.log('day is ' + day);
		} else {
			console.error('no day given');
			return;
		}

		var offset = 1;

		$($('td')[offset + (day - 1)]).append('<span class="event">' + name + '</span>');
	}; // end function insertEvent

    // on click function

	$('#submitter').on('click', function(evt) {
		evt.preventDefault();

		console.log('clicked button!');

		var nameField = $('[name="eventName"]');
		var dayField = $('[name="eventDay"]');

		var name = nameField.val();
		var day = dayField.val();

		insertEvent(name, day);

		nameField.val('');
		dayField.val('');

		$('#myModal').modal('hide')
    });

    $('td').on('click', function(event){
		console.log(event);

		var day = $(event.target).children('.date').text();

		$('[name="eventDay"]').val(day); //val is a getter/setter

		$('#myModal').modal('toggle');
    });

    //initial setup
    $.each(days, function(index, date){
    	insertEvent(date.name, date.day);
    });

	// $('#eventName').on('keyup', function(event){
	// 	console.log($('#eventName').val());
 //    });
	
});