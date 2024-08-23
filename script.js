let profile = document.querySelector('.profile');
let hover = document.querySelector('.profile-info');

profile.addEventListener('click', function () {

    if (hover.style.display === 'none' || hover.style.display === '') {
        hover.style.display = 'block';

        hover.offsetHeight;
        hover.style.opacity = '1';
        hover.style.visibility = 'visible';
        hover.style.maxHeight = '500px';
    } else {
        hover.style.opacity = '0';
        hover.style.visibility = 'hidden';
        hover.style.maxHeight = '0';

        setTimeout(() => {
            hover.style.display = 'none';
        }, 700);
    }
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [12000, 19000, 3000, 5000, 2000, 30000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.main').classList.toggle('sidebar-active');
});

