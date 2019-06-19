
const forkStep = {
    id: 'fork',
    type: 'fork',
    displayName: 'Fork',
    description: 'A fork type step allows running a set of steps against a list of data simulating looping behavior',
    category: 'FlowControl',
    params: [
        {
            name: 'forkByValues',
            type: 'text',
            required: true
        },
        {
            name: 'forkMethod',
            type: 'text',
            required: true
        }
    ]
};
const joinStep = {
    id: 'join',
    type: 'join',
    displayName: 'Join',
    description: 'A join type step is used to join the executions of the fork step to continue processing in a linear manner.',
    category: 'FlowControl',
    params: []
};

export class StepsModel {
    constructor(steps) {
        this.steps = steps;
    }

    setSteps(steps) {
        this.steps = steps;
    }

    getStep(id) {
        if (id === 'join') {
            return JSON.parse(JSON.stringify(joinStep));
        } else if (id === 'fork') {
            return JSON.parse(JSON.stringify(forkStep));
        }
        const step = this.steps.find(s => s.id === id);
        if (step) {
            return JSON.parse(JSON.stringify(step));
        }
        return null;
    }

    getSteps(includeFlowControlSteps = false) {
        const newSteps = JSON.parse(JSON.stringify(this.steps));
        if (includeFlowControlSteps) {
            newSteps.push(JSON.parse(JSON.stringify(forkStep)));
            newSteps.push(JSON.parse(JSON.stringify(joinStep)));
        }
        return newSteps;
    }

    count() {
        return this.steps.length;
    }
}
