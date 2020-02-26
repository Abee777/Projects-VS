// Searchbar Handler
$(function(){
	var searchField = $('#query');
	var icon = $('#search-btn');

	// Focus Event Handler
	$(searchField).on('focus', function(){
		$(this).animate({
			width:'100%'
		}, 400);
		$(icon).animate({
			right:'10px'
		}, 400);
	});
	// Blur Event Handler
	$(searchField).on('blur', function(){
		if(searchField.val() === ''){
			$(searchField).animate({
				width:'45%'
			}, 400);
			$(icon).animate({
				right:'360px'
			}, 400);
		}
	});

	$('#search-form').submit(function(e){
		e.preventDefault();
	});
});

function search () {
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	// Run GET Request on API (https://developers.google.com/youtube/v3/docs/search/list)
	$.get(
		"https://www.googleapis.com/youtube/v3/search", 
		{part: 'snippet, id',
		q: q,
		type: 'video',
		maxResults: 6,
		key: 'AIzaSyA6gPcFjkvaJxrvG6XM9Z-SVthbxMoY9Vw'},
		function (data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			console.log(data);

			// Loop through the items 
			$.each(data.items, function(i, item){
				var output = getOutput(item);

				//Display results
				$('#results').append(output);
			});

			var buttons = getButtons(prevPageToken, nextPageToken);

			// Display Buttons
			$('#buttons').append(buttons);
		}
	);
}

// Next Page Function
function nextPage (){
	var token = $('#next-button').data('token') // .data('token') is acctually data-token="'+nextPageToken+'"' 
	var q = $('#next-button').data('query');
	
	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();
	
	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", 
		{part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyA6gPcFjkvaJxrvG6XM9Z-SVthbxMoY9Vw'},
		function (data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			// Log Data
			console.log(data);

			// Loop through the items 
			$.each(data.items, function(i,item){
				var output = getOutput(item);

				//Display results
				$('#results').append(output);
			});

			var buttons = getButtons(prevPageToken, nextPageToken);

			// Display Buttons
			$('#buttons').append(buttons);
		}
	);
}

// Prev Page Function
function prevPage (){
	var token = $('#prev-button').data('token'); 
	var q = $('#prev-button').data('query');

	// Clear Results
	$('#results').html('');
	$('#buttons').html('');

	// Get Form Input
	q = $('#query').val();

	// Run GET Request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search", 
		{part: 'snippet, id',
		q: q,
		pageToken: token,
		type: 'video',
		key: 'AIzaSyA6gPcFjkvaJxrvG6XM9Z-SVthbxMoY9Vw'},
		function (data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;

			// Log Data
			console.log(data);

			// Loop through the items 
			$.each(data.items, function(i,item){
				var output = getOutput(item);

				//Display results
				$('#results').append(output);
			});

			var buttons = getButtons(prevPageToken, nextPageToken);

			// Display Buttons
			$('#buttons').append(buttons);
		}
	);
}

// Build Output
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;

	// Build Output String
	var output = '<li>'+
	'<div class="list-left">'+
	'<a href="http://www.youtube.com/embed/'+videoId+'"><img src="'+thumb+'"></a>'+
	'</div>'+
	'<div class="list-right">'+
	
	'<h3><a data-fancybox href="http://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>'+
	'<p>'+description+'</p>'+
	'</div>'+
	'</li>' + 
	'<div class="clearfix"></div>';

	return output;
}

// Build Buttons
function getButtons(prevPageToken, nextPageToken){
	// if there is no prevPageToken
	if (!prevPageToken) { 
		var btnOutPut = '<div class="button-container">'+
		'<button id="next-button" class="pagging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		'onclick="nextPage();">Next Page</button></div>';
	} else {
		var btnOutPut = '<div class="button-container">'+
		'<button id="prev-button" class="pagging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		'onclick="prevPage();">Previous Page</button>' +
		'<button id="next-button" class="pagging-button" data-token="'+nextPageToken+'" data-query="'+q+'"'+
		'onclick="nextPage();">Next Page</button></div>';
	}
	return btnOutPut;
}

