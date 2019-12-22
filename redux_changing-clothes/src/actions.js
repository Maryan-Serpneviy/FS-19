export default {
    moveUp() {
        console.log('move up')
        return {
            type: 'moveup'
        }
    },

    moveDown() {
        console.log('move down')
        return {
            type: 'movedown'
        }
    }
}