let twitter_c = document.querySelectorAll('p')[0]
let youtube_c = document.querySelectorAll('p')[2]
let facebook_c = document.querySelectorAll('p')[4]

document.addEventListener('DOMContentLoaded', () => {
    function increment(count){
        const counter = count
    const target = +counter.getAttribute('data-target');
    const duration = 1500; // 3 seconds
    const interval = 50; // update interval in milliseconds

    let start = 0;
    const step = target / (duration / interval);

    const incrementCounter = () => {
        start += step;
        if (start < target) {
            counter.textContent = Math.ceil(start);
            setTimeout(incrementCounter, interval);
        } else {
            counter.textContent = target;
        }
    };

    incrementCounter();
    }
    increment(twitter_c)
    increment(facebook_c)
    increment(youtube_c)
});