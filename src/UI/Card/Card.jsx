import styles from './Card.module.css';

const Card = ({size, type, bgcolor, narrow}) => {
    const {card, bankName, iconBlock, chip, signal, number, date, titleBlock, valueBlock, user} = styles;

    const cardSize = {
        small: .5,
        normal: .7,
        big: 1
    };
    return (
        <div 
            className={ card } 
            style={{
                "--size-modif": cardSize[size] ? cardSize[size] : cardSize.normal,
                background: bgcolor && bgcolor,
                color: type === 'light' ? '#18191b' : 'silver',
            }}
        >
            <div className={ bankName }>Bank Name</div>
            {
                !narrow &&
                <div className={ iconBlock }>
                    <img src="./assets/img/chip.png" alt="chip" className={ chip } />
                    <img src={`./assets/img/signal-${type === 'light' ? 'dark' : 'light'}.png`} alt="signal" className={ signal } />
                </div>
            }
            <div className={ number }>
                <span>1111</span>
                <span>2222</span>
                <span>3333</span>
                <span>4444</span>
            </div>
            {
                !narrow &&
                <div className={ date }>
                    <div className={ titleBlock }>
                        <span>valid</span>
                        <span>thru</span>
                    </div>
                    <div className={ valueBlock }>
                        <span>12</span>
                        <span>/</span>
                        <span>24</span>
                    </div>
                </div>
            }
            
            <div className={ user }>cardholder name</div>
        </div>
    )
}


export default Card;
