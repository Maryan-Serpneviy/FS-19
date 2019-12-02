import React from 'react'
import './Carousel.scss'
import images from './images'

const Option = {
    itemsCount: images.length,
    itemWidth: 100,
    interval: 2500,
    maxSize: 5
}

export default class Carousel extends React.Component {
    state = {
        frameSize: 3,
        step: 3,
        loopInterVal: Option.interval,
        infinite: true
    }
    // refs
    carousel = React.createRef()
    itemsContainer = React.createRef()
    prev = React.createRef()
    next = React.createRef()

    framesCounter = Option.itemsCount - this.state.frameSize
    scrollCounter = 0

    scrollBackwards = () => {
        this.enableBtn(this.next)
        
        this.carousel.current.scroll({
            left: this.scrollCounter - Option.itemWidth * this.state.step,
            behavior: 'smooth'
        })

        this.framesCounter += Number(this.state.step)
        this.scrollCounter -= Option.itemWidth * this.state.step
        // if on first frame - freeze counters
        if (this.framesCounter >= Option.itemsCount - this.state.frameSize) {
            this.framesCounter = Option.itemsCount - this.state.frameSize
            this.scrollCounter = 0
            this.disableBtn(this.prev)
        }
    }

    scrollForwards = () => {
        this.enableBtn(this.prev)
        
        this.carousel.current.scroll({
            left: this.scrollCounter + Option.itemWidth * this.state.step,
            behavior: 'smooth'
        })

        this.framesCounter -= this.state.step
        this.scrollCounter += Option.itemWidth * this.state.step
        // if on last frame - freeze counters
        if (this.framesCounter <= 0) {
            this.framesCounter = 0
            this.scrollCounter = Option.itemsCount * Option.itemWidth - this.state.frameSize * Option.itemWidth // also subtract last frames group
            this.disableBtn(this.next)
        }
    }

    loopCallback = () => {
        this.scrollForwards()
        if (this.framesCounter === 0) {
            this.scrollCounter = -(Option.itemWidth * this.state.frameSize)
            this.framesCounter = Option.itemsCount
            this.enableBtn(this.next)
        }
    }

    toggleLoop = () => {
        this.setState({ infinite: !this.state.infinite })
        this.state.infinite
            ? this.loopInterval = setInterval(this.loopCallback, this.state.loopInterVal)
            : clearInterval(this.loopInterval)
    }

    handleIntervalChange = event => {
        const { value } = event.target
        this.setState({ loopInterVal: value * 1000 })
        clearInterval(this.loopInterval)
        this.loopInterval = setInterval(this.loopCallback, value * 1000)
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    enableBtn(ref) {
        ref.current.style.opacity = 1
        ref.current.disabled = false
    }

    disableBtn(ref) {
        ref.current.style.opacity = 0.4
        ref.current.disabled = true
    }

    componentDidMount() {
        this.carousel.current.style.width = `${Option.itemWidth * this.state.frameSize}px`
        this.itemsContainer.current.style.width = `${Option.itemWidth * Option.itemsCount}px`
        this.disableBtn(this.prev)
    }

    componentDidUpdate() {
        this.carousel.current.style.width = `${Option.itemWidth * this.state.frameSize}px`
    }

    render() {
        const options = []
        for (let i = 1; i <= Option.maxSize; i++) {
            options.push(<option key={i}>{i}</option>)
        }
        return (
            <>
                <div ref={this.carousel} className="Carousel">
                    <ul ref={this.itemsContainer} className="Carousel__list">
                        {images.map(img => (
                            <li key={img}>
                                <img width={Option.itemWidth} src={img} alt="smiley" />
                            </li>
                        ))}
                    </ul>
                </div>
                <button ref={this.prev} onPointerDown={this.scrollBackwards} className="btn btn-scroll btn-prev">&lt;</button>
                <button ref={this.next} onPointerDown={this.scrollForwards} className="btn btn-scroll btn-next">&gt;</button>
                <br />
                <button
                    onPointerDown={this.toggleLoop} className="btn btn-loop"
                    style={!this.state.infinite ? { boxShadow: 'inset 0 0 5px 2px rgb(134, 134, 11)' } : { boxShadow: '' }}>
                    Loop
                </button>
                <br />
                <br />
                <label>
                    Size <select value={this.state.frameSize} onChange={this.handleChange} name="frameSize">
                        {options}
                    </select>
                </label>
                
                <label>
                    Step <select value={this.state.step} onChange={this.handleChange} name="step">
                        {options}
                    </select>
                </label>
                
                {!this.state.infinite && (
                    <>
                        <label>
                            Interval <select
                                value={this.state.loopInterVal / 1000}
                                onChange={this.handleIntervalChange} style={{ width: '50px' }}
                            >
                                {options}
                                <option>2.5</option>
                                <option>0.5</option>
                                <option>0.35</option>
                            </select>
                        </label>
                    </>
                )}
            </>
        )
    }
}
