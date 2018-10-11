var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Painting", "Dogs", "Coding"],
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(194, 24, 17, 0.9)',
                'rgba(124, 10, 2, 0.9)',
                'rgba(66, 13, 9, 0.9)'
            ],
            borderColor: [
                'rgba(236, 240, 241, 1)',
                'rgba(236, 240, 241, 1)',
                'rgba(236, 240, 241, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            animateScale: true
        },
    }
});