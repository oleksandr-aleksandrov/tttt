(function ($) {
    var listOfNews = new newsList();
    var startNumProd = 0, finishNumProd = 10;

    function newsList() {
        this.items = [];
        this.showTo = function (newsList) {
            $('#newsWrapper').empty();
            console.log('shgowto');

            newsList.forEach(function (article) {
                const newsItem = $('<article/>', {
                    class: 'news-item col-md-4'
                });
                // console.log(article);
                const title = '<h3 class="overflow-title">' + article.title + '</h3>';
                const image = '<img class="img-responsive" src="' + article.img + '"></img>';
                const excerpt = '<p>' + article.excerpt + '</p>';
                const date = '<time class="news-data">' + article.date + '</time>';
                const hr = '<hr>';
                newsItem.append(image).append(date).append(title).append(hr).append(excerpt);
                $('#newsWrapper').append(newsItem);
                // console.log('shgowto for');
            });

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
            listOfNews.showTo(newsList, startNumProd, finishNumProd);
        }
    });


    $("#mainNavigation ul li a").click(function (e) {
        e.preventDefault();
        $("#mainNavigation ul li a").removeClass('active');
        $(this).addClass('active');
    });

    

})(jQuery);