import React, { Component } from 'react';
import Room from './Room';
import { Container, Row, Col } from 'reactstrap';

class Rooms extends Component {
    
    render() {

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        const imgNormal = ['https://www.lottoland.co.uk/cms/5b4c728fb19ad3223353efcc/euromillionsplus.jpg',
            'https://www.lottoland.co.uk/cms/5b4c7290f6c696502c63d253/fridaylotto.jpg',
            "https://www.lottoland.co.uk/cms/5b4c7293b9b5ab105d7ffa23/irishlotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729aeab100408f5dfa2c/polishminilotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729bb9b5ab105d7ffa4f/bitcoinlotto.jpg.jpg",
            "https://www.lottoland.co.uk/cms/5b4c72885c9c2d2d4bbb1b1b/en_gb-uklotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c72a0b19ad3223353efeb/worldmillions.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729feab100408f5dfa48/bitcoinlotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729eb19ad3223353efde/superenalotto.jpg",
        ]


        const imgCollect = ['https://www.lottoland.co.uk/cms/5b4c729eb19ad3223353efde/superenalotto.jpg',
            'https://www.lottoland.co.uk/cms/5b4c729feab100408f5dfa48/en_gb-uklotto.jpg',
            "https://www.lottoland.co.uk/cms/5b4c72a0b19ad3223353efeb/worldmillions.jpg",
            "https://www.lottoland.co.uk/cms/5b4c7293b9b5ab105d7ffa23/irishlotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729bb9b5ab105d7ffa4f/powerball.jpg",
            "https://www.lottoland.co.uk/cms/5b4c72885c9c2d2d4bbb1b1b/bitcoinlotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729aeab100408f5dfa2c/polishminilotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c729feab100408f5dfa48/fridaylotto.jpg",
            "https://www.lottoland.co.uk/cms/5b4c728fb19ad3223353efcc/euromillionsplus.jpg",
        ]
        const listItems = numbers.map((number) => {
            if (this.props.typeRoom == 'normal') {

                return <Room expireDay={Math.floor(Math.random() * 6) + 1 } typeRoom={this.props.typeRoom} imgpic={imgNormal[number]} key={number} />
            } else {
                return <Room expireDay={Math.floor(Math.random() * 6) + 1 } typeRoom={this.props.typeRoom} imgpic={imgCollect[number]} key={number} />
            }
        }
        );
        return (
            <Row style={{}}>
                {listItems}
            </Row>
        );
    }
}

export default Rooms;