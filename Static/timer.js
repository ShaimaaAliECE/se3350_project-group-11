

function startCounter() {
    let count = 0;
    setInterval(() => {
        count ++;
        if (count === 5) {
            fetch("/time");
            count = 0;
        }
    }, 1000);
}