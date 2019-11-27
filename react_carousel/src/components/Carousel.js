import React from 'react'
import './Carousel.scss'
import images from './images'

const Option = {
    itemsCount: images.length,
    itemWidth: 130,
    interval: 2500
}

export default class Carousel extends React.Component {
    state = {
        options: false,
        frameSize: 3,
        step: 3,
        loopInterVal: Option.interval,
        infinite: false
    }

    framesCounter = Option.itemsCount - this.state.frameSize
    scrollCounter = 0
    // refs
    carousel = React.createRef()
    prev = React.createRef()
    next = React.createRef()
    loop = React.createRef()
    size = React.createRef()
    step = React.createRef()
    interval = React.createRef()

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
        if (!this.state.infinite) {
            this.state.infinite = true
            this.loop.current.style.boxShadow = 'inset 0 0 5px 2px rgb(134, 134, 11)'
            this.loopInterval = setInterval(this.loopCallback, this.state.loopInterVal)
        } else {
            this.state.infinite = false
            this.loop.current.style.boxShadow = ''
            clearInterval(this.loopInterval)
        }
        this.setState({
            options: !this.state.options
        })
    }

    handleFramesChange = e => {
        this.setState({
            frameSize: e.target.value
        })
    }

    handleStepChange = e => {
        this.setState({
            step: e.target.value
        })
    }

    handleIntervalChange = e => {
        this.setState({
            loopInterVal: e.target.value * 1000
        })
        clearInterval(this.loopInterval)
        this.loopInterval = setInterval(this.loopCallback, e.target.value * 1000)
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
        this.size.current.value = this.state.frameSize
        this.step.current.value = this.state.step
        this.disableBtn(this.prev)
    }

    componentDidUpdate() {
        this.carousel.current.style.width = `${Option.itemWidth * this.state.frameSize}px`
    }

    render() {
        return (
            <>
                <div ref={this.carousel} className="Carousel">
                    <ul className="Carousel__list">
                        {images.map(img => (
                            <li key={img}>
                                <img src={img} alt="smiley" />
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    ref={this.prev}
                    className="btn btn-scroll btn-prev"
                    onPointerDown={this.scrollBackwards}
                    type="button"
                >
                    &lt;
                </button>
                <button
                    ref={this.next}
                    className="btn btn-scroll btn-next"
                    onPointerDown={this.scrollForwards}
                    type="button"
                >
                    &gt;
                </button>
                <br />
                <button ref={this.loop} className="btn btn-loop" onPointerDown={this.toggleLoop}>
                    Loop
                </button>
                <br />
                <br />
                <label htmlFor="options__frames">Size</label>
                <select ref={this.size} id="options__frames" onChange={this.handleFramesChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label htmlFor="options__step">Step</label>
                <select ref={this.step} id="options__step" onChange={this.handleStepChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                {this.state.options && (
                    <>
                        <label htmlFor="options__interval">Interval</label>
                        <select
                            ref={this.interval}
                            id="options__interval"
                            onChange={this.handleIntervalChange}
                            value={this.state.loopInterVal / 1000}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>2.5</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>0.5</option>
                            <option>0.35</option>
                        </select>
                    </>
                )}
            </>
        )
    }
}
