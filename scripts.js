document.addEventListener("DOMContentLoaded", () => {
    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        const day = now.toLocaleString('en-us', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
        document.querySelector('[data-testid="currentDay"]').textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update the time every second
});
