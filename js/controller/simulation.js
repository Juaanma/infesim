// Simulation controller

import { parameters } from '../model/parameters.js';
import { addOnParameterChangedListener } from '../view/parameters.js';
import { initializePlot, plotConditionsEvolution } from '../view/plot.js';
import { SIRModel, ODESolver } from '../model/simulation.js';

// Maps user inputs to model inputs, and starts a new simulation
function startSimulation() {
    const populationSize = parameters['population-size'].value;
    const infectedPercentage = parameters['infected-percentage'].value / 100;

    const susceptible = Math.round(populationSize * (1 - infectedPercentage));
    const infected = populationSize - susceptible;
    const recovered = 0;

    const transmissionRate = parameters['transmission-rate'].value / 100;
    const recoveryRate = parameters['recovery-rate'].value / 100;

    const model = new SIRModel(susceptible, infected, recovered, transmissionRate, recoveryRate);
    const solver = new ODESolver(model);

    const timePoints = [...Array(365).keys()];
    const conditionsEvolution = solver.solve(timePoints);

    plotConditionsEvolution(conditionsEvolution);
}

function initializeSimulationController() {
    initializePlot();

    startSimulation();

    addOnParameterChangedListener(startSimulation);
}

export { initializeSimulationController };