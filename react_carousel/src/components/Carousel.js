import React from 'react'
import './Carousel.scss'
import images from './images'

const Option = {
    itemsCount: images.length,
    itemWidth: 130,
    frameSize: 3,
    step: 3,
    loopInterVal: 2000
}
Object.freeze(Option)

export default class Carousel extends React.Component {
    // state
    infinite = false
    itemsCounter = Option.itemsCount - Option.frameSize
    scrollCounter = 0
    // refs
    carousel = React.createRef()
    prev = React.createRef()
    next = React.createRef()
    loop = React.createRef()

    scrollBackwards = () => {
        this.enableBtn(this.next)

        this.carousel.current.scroll({
            left: this.scrollCounter - Option.itemWidth * Option.step,
            behavior: 'smooth'
        })

        this.itemsCounter += Option.step
        this.scrollCounter -= Option.itemWidth * Option.step
        // if on first frame - freeze counters
        if (this.itemsCounter >= Option.itemsCount - Option.frameSize) {
            this.itemsCounter = Option.itemsCount - Option.frameSize
            this.scrollCounter = 0

            this.disableBtn(this.prev)
        }
    }

    scrollForwards = () => {
        this.enableBtn(this.prev)

        this.carousel.current.scroll({
            left: this.scrollCounter + Option.itemWidth * Option.step,
            behavior: 'smooth'
        })

        this.itemsCounter -= Option.step
        this.scrollCounter += Option.itemWidth * Option.step
        // if on last frame - freeze counters
        if (this.itemsCounter <= 0) {
            this.itemsCounter = 0
            this.scrollCounter = Option.itemsCount * Option.itemWidth - Option.frameSize * Option.itemWidth // also subtract last frames group

            this.disableBtn(this.next)
        }
    }

    loopCallback = () => {
        this.scrollForwards()
        if (this.itemsCounter === 0) {
            this.scrollCounter = -(Option.itemWidth * Option.frameSize)
            this.itemsCounter = Option.itemsCount
            this.disableBtn(this.next)
        }
        if (this.itemsCounter <= 0) {
            this.disableBtn(this.next)
        }
        if (this.itemsCounter >= Option.itemsCount - Option.frameSize) {
            this.enableBtn(this.next)
        }
    }

    toggleLoop = () => {
        if (!this.infinite) {
            this.infinite = true
            this.loop.current.style.boxShadow = 'inset 0 0 5px 2px rgb(134, 134, 11)'
            this.loopInterval = setInterval(this.loopCallback, 2000)
        } else {
            this.infinite = false
            this.loop.current.style.boxShadow = ''
            clearInterval(this.loopInterval)
        }
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
        this.carousel.current.style.width = `${Option.itemWidth * Option.frameSize}px`
        this.disableBtn(this.prev)
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
            </>
        )
    }
}
