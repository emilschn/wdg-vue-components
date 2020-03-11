export const store = {
    state: {
        step: 'intro'
    },
    changeStep (newStep) {
        this.state.step = newStep
    }
}
