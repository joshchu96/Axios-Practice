//jquery section
const $gifPost = $('#gif-posting');
const $searchInput = $('#search');

//add ajax to retrieve the gif through a random array
function addGif(res) {
    let numResults = res.data.length;
    if(numResults) {
        let randomIndex = Math.floor(Math.random() * numResults);
        let $newCol = $('<div>');
        let $newGif = $('<img>', {
            src: res.data[randomIndex].images.original.url
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

//create a func to clear the search box and sind info to ajax
$('form').on('submit', async function(e){
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val('');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search',
    {params: {
        q: searchTerm,
        apiKey: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
    }
    });

    addGif(res.data)
});

//remove the gif

$('#remove-button').on('click', function(){
    $gifArea.empty();
})
