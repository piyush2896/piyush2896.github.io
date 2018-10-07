$(document).ready(function() {

    ticks = [{ticks: {
                suggestedMin: 60,
                autoSkip: false
            }}]

    width = $( window ).width();
    if(width < 500){
        type_cs_skills = 'bar';
        scale = {
            yAxes: ticks
        };
        default_font_size = 10;
    }else{
        type_cs_skills = 'horizontalBar';
        scale = {
            xAxes: ticks
        };
        default_font_size = 18;
    }

    data_cs_skills = {
        labels: ['Python', 'Java', 'C/C++', 'Octave', 'Basic HTML', 'Basic CSS', 'JavaScript'],
        datasets: [{
            data: [98, 94, 89, 70, 75, 75, 85],
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 62, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(180, 75, 200, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    };

    options_cs_skills = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Programming Language Skills',
          fontSize: 25
        },
        legend: {
            display: false,
        },
        scales: scale
    }

    let cs_skills_chart = document.getElementById('cs-skils-chart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = default_font_size;
    Chart.defaults.global.defaultFontColor = '#777';

    let csChart = new Chart(cs_skills_chart, {
        type: type_cs_skills,
        data: data_cs_skills,
        options: options_cs_skills
    });

    // Library Skills

    type_lib_skills = 'polarArea';

    data_lib_skills = {
        labels: ['Tensorflow', 'Keras', 'PyTorch', 'Matplotlib', 'Numpy', 'Pandas'],
        datasets: [{
            data: [90, 92, 80, 95, 95, 95],
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 62, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    };

    options_lib_skills = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Libraries',
          fontSize: 25
        },
        legend: {
            display: true,
            labels: {
                fontColor: '#000'
            }
        }
    }

    let lib_skills_chart = document.getElementById('lib-skils-chart').getContext('2d');

    let libChart = new Chart(lib_skills_chart, {
        type: type_lib_skills,
        data: data_lib_skills,
        options: options_lib_skills
    });
});