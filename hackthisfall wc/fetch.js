const apiKey = '686ee99bedca489482c6b185b02562bb';

const country = 'in'; // Country code for India
const category = 'health';

const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
        const dataShow = document.getElementById('card');

        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                dataShow.innerHTML = ''; // Clear previous content

                if (data.articles && data.articles.length > 0) {
                    for (let i = 0; i < data.articles.length; i++) {
                        const article = data.articles[i];
                        const articleHTML = `
                            <div class="container">
                                <h1>${article.title}</h1>
                                <h5>${new Date(article.publishedAt).toLocaleString()}</h5>
                                <p>${article.description}</p>
                                <a href="${article.url}" class="btn btn-danger" role="button">Read Here</a>
                            </div>
                            <hr>
                        `;
                        dataShow.innerHTML += articleHTML;
                    }
                } else {
                    dataShow.innerHTML = 'No articles found.';
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });