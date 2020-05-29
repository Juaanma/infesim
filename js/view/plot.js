// Simulation plot view

const ctx = document.getElementById('simulation-canvas').getContext('2d');
let chart;

// Creates chart object with initial configuration
function initializePlot() {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Susceptible',
                order: 1,
                backgroundColor: '#7fbf7f',
                borderColor: '#7fbf7f'
            }, {
                label: 'Infectious',
                order: 0,
                backgroundColor: '#f66',
                borderColor: '#f66'
            },  {
                label: 'Recovered',
                order: 2,
                backgroundColor: '#202020',
                borderColor: '#202020'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Days'
                    }
                }],
                yAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Population'
                    }
                }]
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            hover: {
                intersect: false
            },
            tooltips: {
                callbacks: {
                    // Rounds Y-axis values
                    label: function(tooltipItem, data) {
                        const datasetLabel = data.datasets[tooltipItem.datasetIndex].label;
                        const yLabel = Math.round(tooltipItem.yLabel);
                        return datasetLabel + ": " + yLabel;
                    }
                }
            },
            legend: {
                // Hiding data not allowed
                onClick: () => false
            }
        }
    });
}

// Updates plot with new values
function updatePlot(labels, datasets, maxY) {
    const data = chart.data;
    const ticks = chart.options.scales.yAxes[0].ticks;

    data.labels = labels;
    for (let i = 0; i < datasets.length; i++) {
        data.datasets[i].data = datasets[i];
    }

    // Max Y value forced
    ticks.max = maxY;
    // Max Y label not shown (in case it's too close to previous label)
    ticks.callback = tick => (tick !== maxY ? tick : '');

    chart.update();
}

// Maps simulation results to plot inputs
function plotConditionsEvolution(conditionsEvolution) {
    const labels = [...conditionsEvolution.keys()];

    const susceptibleEvolution = conditionsEvolution.map(row => row[0]);
    const infectedEvolution = conditionsEvolution.map(row => row[1]);
    const recoveredEvolution = conditionsEvolution.map(row => row[2]);

    // Transposing
    const datasets = [susceptibleEvolution, infectedEvolution, recoveredEvolution];

    // Max Y value
    const totalPopulation = susceptibleEvolution[0] + infectedEvolution[0] + recoveredEvolution[0];

    updatePlot(labels, datasets, totalPopulation);
}

export { initializePlot, plotConditionsEvolution };