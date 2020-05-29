// Simulation parameters view

function initializeParametersView(parameters) {
    for (const parameter in parameters) {
        updateParameterInput(parameter, parameters[parameter].input);
        updateParameterLabel(parameter, parameters[parameter].value);
    }
}

function updateParameterLabel(parameter, value) {
    const label = $("label[for='" + parameter + "'] > span");

    label.text(value.toLocaleString());
}

function updateParameterInput(parameter, input) {
    const inputRange = $('#' + parameter);

    inputRange.val(input)
}

// Input: on slider modified
function addOnParameterInputListener(listener) {
    $(document).on('input', '.parameter', function() {
        const range = $(this);
        const parameter = range.attr('id');
        const input = range.val();

        listener(parameter, input);
    });
}

// Change: on slider modification finished
function addOnParameterChangedListener(listener) {
    $(document).on('change', '.parameter', function() {
        const range = $(this);
        const parameter = range.attr('id');
        const input = range.val();

        listener(parameter, input);
    });
}

export { initializeParametersView, addOnParameterInputListener, addOnParameterChangedListener, updateParameterLabel, updateParameterInput };