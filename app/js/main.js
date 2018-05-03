(function ($) {
    var listOfNews = new newsList();

    function newsList() {
        this.showTo = function(newsList, startNumber, finishNumber){
            $('#newsWrapper').empty();
            console.log('shgowto');

            newsList.forEach(function(article) {
                const newsItem = $('<div/>', {
                    class: 'col-md-4'
                });
                console.log(article);
                const title = '<h2>' + article.title + '</h2>';
                const image = '<img width="100" src="' + article.img +'"></img>';
                const excerpt = '<p>' + article.excerpt + '</p>';
                const date = '<p>' + article.date + '</p>';
                newsItem.append(title).append(image).append(excerpt).append(date);
                $('#newsWrapper').append(newsItem);
                console.log('shgowto for');
            });

            // for (var i = startNumber; i < finishNumber; i++){
            //     const newsItem = $('<div/>', {
            //         class: 'col-md-4'
            //     });
            //     console.log(article);
            //     const title = '<h2>' + article.title + '</h2>';
            //     const image = '<img width="100" src="' + article.img +'"></img>';
            //     const excerpt = '<p>' + article.excerpt + '</p>';
            //     const date = '<p>' + article.date + '</p>';
            //     newsItem.append(title).append(image).append(excerpt).append(date);
            //     $('#newsWrapper').append(newsItem);
            //     console.log('shgowto for');
            // }
            return this;
        }
    }

    $.getJSON("app/data.json", function (data) {
        // console.log(data);
        const newsList = [];
        for (key in data.article) {
            const article = data.article[key];
            newsList.push(article);
            // console.log(article);
            listOfNews.showTo(newsList);
        }
    });

})(jQuery);