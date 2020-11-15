# infesim
## Introduction
[**infesim**](https://juanmsuarez.github.io/infesim/) is a web app that allows the user to 
run simulations about the evolution of infectious diseases, using mathematical models.

### SIR Model
In particular, it uses the [**SIR model**](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model), that consists of three compartments:

* Susceptible individuals (S)
* Infectious individuals (I)
* Recovered individuals (R)

The dynamics of the epidemic can be described by a [set of ordinary differential equations](https://en.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model_without_vital_dynamics).

### Simulation
The simulation is reduced to solving the previous set of equations.

Since it's an ODE, it can be easily solved using the [**Euler method**](https://en.wikipedia.org/wiki/Euler_method).
This method consists of taking small steps, and repeatedly adding the slope.

## Implementation
### Architecture
The structure used for the project is inspired by the MVC architecture.

We can distinguish four groups of components, corresponding to: the navigation, the configuration, the parameters and the simulation.

To improve the clarity and modularity of the code, each JS file contains a JS module.

### Navigation
This component updates the header according to the current section.

### Parameters
These components display the parameters, store them, and manage related events.

### Configuration
These components display and store the current style, and manage related events.

### Simulation
When the parameters are updated, a new simulation is run and its results are displayed when ready.

## Compatibility
This website is working correctly in the last versions of: Chrome, Firefox, Opera and Edge. The UI is responsive, so that the site can be used from mobile devices. 

## Credits
### Inspiration
Inspired in [Simulating an epidemic](https://www.youtube.com/watch?v=gxAaO2rsdIs) by _3blue1brown_.

### Libraries
* [jQuery 3.5.0](https://code.jquery.com/)
* [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3/getting-started/download/)
* [KaTeX 0.11.1](https://katex.org/docs/browser.html)
* [Chart.js 2.9.3](https://www.chartjs.org/docs/latest/getting-started/installation.html)

### Other resources
* [Material Icons](https://google.github.io/material-design-icons/)
* [Cover template - Bootstrap](https://getbootstrap.com/docs/4.3/examples/cover/#)
