var xhr = new XMLHttpRequest();
var url = './newArticle.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;

        var author = document.createElement('p');
        author.textContent = 'Author: ' + article.author;

        var date = document.createElement('p');
        date.textContent = 'Published_date: ' + article.published_date;

    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(author);
        articleDiv.appendChild(date);
    
        articlesDiv.appendChild(articleDiv);
      });
}
xhr.send();