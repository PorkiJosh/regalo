const _0x488f2e = _0x82d5;
(function(_0x49ee11, _0x4c0de7) {
    const _0x4c2c3a = _0x82d5
      , _0x4260e7 = _0x49ee11();
    while (!![]) {
        try {
            const _0xf48a59 = parseInt(_0x4c2c3a(0xc4)) / 0x1 * (-parseInt(_0x4c2c3a(0xcb)) / 0x2) + -parseInt(_0x4c2c3a(0xd5)) / 0x3 * (-parseInt(_0x4c2c3a(0xf2)) / 0x4) + -parseInt(_0x4c2c3a(0xc0)) / 0x5 * (parseInt(_0x4c2c3a(0xcc)) / 0x6) + -parseInt(_0x4c2c3a(0xd9)) / 0x7 + -parseInt(_0x4c2c3a(0xd7)) / 0x8 + parseInt(_0x4c2c3a(0xd1)) / 0x9 + parseInt(_0x4c2c3a(0xdc)) / 0xa;
            if (_0xf48a59 === _0x4c0de7)
                break;
            else
                _0x4260e7['push'](_0x4260e7['shift']());
        } catch (_0xc278c5) {
            _0x4260e7['push'](_0x4260e7['shift']());
        }
    }
}(_0x471a, 0x2cb7a));
const {useReducer} = React
  , TOGGLE_BOX = _0x488f2e(0xf3)
  , toggleBox = () => {
    return {
        'type': TOGGLE_BOX
    };
}
  , DEFAULT = {
    'open': ![],
    'wasOpen': ![]
}
  , reducer = (_0xd046f4=DEFAULT, {type: _0x497a02}) => {
    switch (_0x497a02) {
    case TOGGLE_BOX:
        {
            return {
                'open': !_0xd046f4['open'],
                'wasOpen': _0xd046f4['open']
            };
        }
    default:
        return _0xd046f4;
    }
}
  , GiftBox = () => {
    const _0x126987 = _0x488f2e
      , [_0x3080f3,_0xa88090] = useReducer(reducer, DEFAULT);
    return React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': _0x126987(0xf5)
    }, React['createElement'](_0x126987(0xe4), {
        'className': 'shadow'
    }), React['createElement'](_0x126987(0xe4), {
        'className': _0x126987(0xc5)
    }), React['createElement'](_0x126987(0xe4), {
        'className': _0x126987(0xf1)
    }), React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': 'box'
    }, _0x3080f3[_0x126987(0xd4)] ? React[_0x126987(0xcd)]('i', {
        'className': _0x126987(0xdb)
    }) : null, React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': _0x3080f3['open'] ? _0x126987(0xed) : _0x3080f3['wasOpen'] ? 'lid\x20close' : _0x126987(0xef),
        'onClick': _0x5ea351 => {
            const _0x364b91 = _0x126987;
            _0xa88090(toggleBox()),
            !_0x3080f3[_0x364b91(0xd4)] && startConfetti();
        }
    }, React['createElement']('div', {
        'className': 'qmark'
    }, _0x3080f3[_0x126987(0xd4)] ? '!' : '?'), React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': 'face\x20ltop'
    }), React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': 'face\x20lleft'
    }), React['createElement']('div', {
        'className': _0x126987(0xe9)
    })), React[_0x126987(0xcd)]('div', {
        'className': _0x126987(0xea)
    }), React[_0x126987(0xcd)]('div', {
        'className': 'face\x20left'
    }), React[_0x126987(0xcd)](_0x126987(0xe4), {
        'className': _0x126987(0xf4)
    })), _0x3080f3['open'] && React['createElement'](_0x126987(0xe4), {
        'className': 'message'
    }, _0x126987(0xcf)));
}
;
ReactDOM['render'](React[_0x488f2e(0xcd)](GiftBox, null), document[_0x488f2e(0xd3)](_0x488f2e(0xeb)));
function _0x471a() {
    const _0x231dd5 = ['fa\x20fa-heart\x20heart-gift', '9731860mjvwqo', 'body', 'height', ',\x20100%,\x2075%)', 'addEventListener', 'hsl(', 'preventDefault', 'cos', 'div', 'forEach', 'clearRect', 'key', 'stroke', 'face\x20lright', 'face\x20top', 'root', 'lineWidth', 'lid\x20open', 'width', 'lid', 'log', 'shadow3', '4voGKMy', '[GiftBox]\x20Toggle', 'face\x20right', 'floor', 'catch', '305YnllfP', 'sin', 'tilt', 'innerWidth', '47153WuNScG', 'shadow2', 'F12', 'DOMContentLoaded', 'play', 'click', 'keydown', '14xVkfhG', '34266HsfCKS', 'createElement', 'shiftKey', 'A veces, una persona llega sin esperarla como tú, Kiara. 🌸 ❤️ !', 'ctrlKey', '383949LLXTSV', 'lineTo', 'getElementById', 'open', '1038159zLnEbn', 'random', '1772944naSIss', 'color', '1950746oFIbpF', 'push'];
    _0x471a = function() {
        return _0x231dd5;
    }
    ;
    return _0x471a();
}
function _0x82d5(_0x2385ad, _0x599a68) {
    const _0x471a5f = _0x471a();
    return _0x82d5 = function(_0x82d532, _0x538c30) {
        _0x82d532 = _0x82d532 - 0xc0;
        let _0x2a2202 = _0x471a5f[_0x82d532];
        return _0x2a2202;
    }
    ,
    _0x82d5(_0x2385ad, _0x599a68);
}
function startConfetti() {
    const _0x5a2056 = _0x488f2e
      , _0x27efc1 = document[_0x5a2056(0xd3)]('confetti-canvas')
      , _0x1d4311 = _0x27efc1['getContext']('2d');
    _0x27efc1[_0x5a2056(0xee)] = window[_0x5a2056(0xc3)],
    _0x27efc1[_0x5a2056(0xde)] = window['innerHeight'];
    const _0x4c003a = [];
    for (let _0x525736 = 0x0; _0x525736 < 0x96; _0x525736++) {
        _0x4c003a[_0x5a2056(0xda)]({
            'x': Math['random']() * _0x27efc1[_0x5a2056(0xee)],
            'y': Math[_0x5a2056(0xd6)]() * _0x27efc1[_0x5a2056(0xde)] - _0x27efc1[_0x5a2056(0xde)],
            'r': Math[_0x5a2056(0xd6)]() * 0x6 + 0x4,
            'd': Math[_0x5a2056(0xd6)]() * 0x32 + 0xa,
            'color': _0x5a2056(0xe1) + (Math[_0x5a2056(0xd6)]() * 0x14 + 0x140) + _0x5a2056(0xdf),
            'tilt': Math[_0x5a2056(0xd6)]() * 0xa - 0x5,
            'tiltAngleIncrement': Math[_0x5a2056(0xd6)]() * 0.07 + 0.05,
            'tiltAngle': 0x0
        });
    }
    function _0x5ce7ed() {
        const _0x4b5943 = _0x5a2056;
        _0x1d4311[_0x4b5943(0xe6)](0x0, 0x0, _0x27efc1[_0x4b5943(0xee)], _0x27efc1['height']),
        _0x4c003a['forEach'](_0x1a0068 => {
            const _0x40dd10 = _0x4b5943;
            _0x1d4311['beginPath'](),
            _0x1d4311[_0x40dd10(0xec)] = _0x1a0068['r'],
            _0x1d4311['strokeStyle'] = _0x1a0068[_0x40dd10(0xd8)],
            _0x1d4311['moveTo'](_0x1a0068['x'] + _0x1a0068[_0x40dd10(0xc2)] + _0x1a0068['r'] / 0x2, _0x1a0068['y']),
            _0x1d4311[_0x40dd10(0xd2)](_0x1a0068['x'] + _0x1a0068[_0x40dd10(0xc2)], _0x1a0068['y'] + _0x1a0068[_0x40dd10(0xc2)] + _0x1a0068['r'] / 0x2),
            _0x1d4311[_0x40dd10(0xe8)]();
        }
        ),
        _0x461ed4(),
        requestAnimationFrame(_0x5ce7ed);
    }
    function _0x461ed4() {
        const _0x3e9533 = _0x5a2056;
        _0x4c003a[_0x3e9533(0xe5)](_0x770df6 => {
            const _0x31d2db = _0x3e9533;
            _0x770df6['tiltAngle'] += _0x770df6['tiltAngleIncrement'],
            _0x770df6['y'] += (Math[_0x31d2db(0xe3)](_0x770df6['d']) + 0x3 + _0x770df6['r'] / 0x2) * 0.5,
            _0x770df6['x'] += Math[_0x31d2db(0xc1)](0.5),
            _0x770df6[_0x31d2db(0xc2)] = Math[_0x31d2db(0xc1)](_0x770df6['tiltAngle']) * 0xf,
            _0x770df6['y'] > _0x27efc1[_0x31d2db(0xde)] && (_0x770df6['y'] = -0xa,
            _0x770df6['x'] = Math['random']() * _0x27efc1['width']);
        }
        );
    }
    _0x5ce7ed();
}
document[_0x488f2e(0xe0)](_0x488f2e(0xc7), function() {
    const _0x43e032 = _0x488f2e
      , _0x41435d = new Audio('love.mp3')
      , _0x58a876 = () => {
        const _0x2fbed2 = _0x82d5;
        _0x41435d[_0x2fbed2(0xc8)]()[_0x2fbed2(0xf6)](_0x13c470 => {
            const _0x4675a5 = _0x2fbed2;
            console[_0x4675a5(0xf0)]('Reproducción\x20automática\x20bloqueada,\x20esperando\x20interacción\x20del\x20usuario.');
        }
        );
    }
    ;
    _0x58a876(),
    document[_0x43e032(0xdd)][_0x43e032(0xe0)](_0x43e032(0xc9), () => {
        const _0x4aa9f8 = _0x43e032;
        _0x41435d[_0x4aa9f8(0xc8)]();
    }
    , {
        'once': !![]
    });
}),
document['addEventListener']('contextmenu', function(_0x21c51c) {
    const _0x544f05 = _0x488f2e;
    _0x21c51c[_0x544f05(0xe2)]();
}),
document[_0x488f2e(0xe0)](_0x488f2e(0xca), function(_0x3e190d) {
    const _0x5c219e = _0x488f2e;
    _0x3e190d[_0x5c219e(0xe7)] === _0x5c219e(0xc6) && _0x3e190d[_0x5c219e(0xe2)](),
    _0x3e190d[_0x5c219e(0xd0)] && _0x3e190d[_0x5c219e(0xce)] && _0x3e190d['key'] === 'I' && _0x3e190d[_0x5c219e(0xe2)](),
    _0x3e190d[_0x5c219e(0xd0)] && _0x3e190d[_0x5c219e(0xe7)] === 'u' && _0x3e190d[_0x5c219e(0xe2)]();
});
