var a = ['$\x20\x5ctext{Time\x20(ms)}\x20$', 'graph5', 'value', 'I_L', 'callback', 'Limit\x20Cycles', 'margin', 'lines', 'Voltage', 'graph4', 'testdataDropdown', 'Input\x20Current', 'sohandles', 'I_Na', 'getElementById', 'range', 'name', 'selectedIndex', 'title', 'postMessage', 'ready', 'updateInterp', 'methodDropdown', 'graph2', 'mode', 'yaxis', '$\x20\x5ctext{Current}\x20\x5c;\x20(\x5cmu\x20\x5ctext{A}\x20\x5ctext{cm}^{-2})\x20$', 'xaxis', 'graph1', 'onmessage', 'newPlot', 'I_K', 'options', './assets/js/simulate.js', 'Gating\x20Value'];
(function(b, e) {
    var f = function(g) {
        while (--g) {
            b['push'](b['shift']());
        }
    };
    f(++e);
}(a, 0x148));
var b = function(c, d) {
    c = c - 0x0;
    var e = a[c];
    return e;
};

let g_Na = 100 ;
let g_K = 80 ;
let g_L = 0.3;
let E_Na = 50.0;
let E_K = -77.0;
let E_L = -54.387;
let parameters = {};
parameters['g_Na'] = g_Na;
parameters['g_K'] = g_K;
parameters['g_L'] = g_L;
parameters['E_Na'] = E_Na;
parameters['E_K'] = E_K;
parameters['E_L'] = E_L;


function loggNa(gNa) {
    g_Na = gNa;
    parameters['g_Na'] = g_Na;
    // console.log(parameters);
    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}

function LoggK(gK) {
    g_K = gK;
    parameters['g_K'] = g_K;
    // console.log(parameters);
    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}

function LoggL(gL) {
    g_L = gL;
    parameters['g_L'] = g_L;
    // console.log(parameters);

    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}

function LogENa(ENa) {
    E_Na = ENa;
    parameters['E_Na'] = E_Na;
    // console.log(parameters);

    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}

function LogEK(EK) {
    E_K = EK;
    parameters['E_K'] = E_K;
    // console.log(parameters);
    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}

function LogEL(EL) {
    E_L = EL;
    parameters['E_L'] = E_L;
    // console.log(parameters);
    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
}



// function LogHere(parameters) {
//     console.log("parameters", + parameters);
//     parameter = parameters;
//     console.log("parameter", + parameter);
//     console.log("DEEPER");
//     simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], parameters]);
// }


var simulator = new Worker(b('0x14'));
simulator[b('0x10')] = function(c) {
    var d = c['data'];
    
    update_plots(d);
};

// let gNa = 120; 


function redraw_plots() {
    simulator[b('0x6')]([inputPlot[b('0x22')], inputPlot['interpMethod'], inputPlot['interpTension'], g_Na]);
}

function update_plots(F) {
    var [G, H, I, J, K, L, M, N, O] = F;
    var P = {};
    P[b('0x3')] = 'V';
    P['x'] = G;
    P['y'] = H;
    P[b('0xb')] = 'lines';
    var Q = P;
    var R = [Q];
    var S = {};
    S[b('0x5')] = '$\x20\x5ctext{Time\x20(ms)}\x20$';
    var T = {};
    T['title'] = '$\x20\x5ctext{Voltage\x20(mV)}\x20$';
    var U = {};
    U['t'] = 0x19;
    U['l'] = 0x2d;
    U['b'] = 0x23;
    U['r'] = 0x5;
    var W = {};
    W[b('0x5')] = b('0x1e');
    W[b('0xe')] = S;
    W[b('0xc')] = T;
    W[b('0x1c')] = U;
    var X = W;
    Plotly[b('0x11')](b('0xa'), R, X);
    var Y = {};
    Y[b('0x3')] = b('0x0');
    Y['x'] = G;
    Y['y'] = M;
    Y['mode'] = b('0x1d');
    var Z = Y;
    var a0 = {};
    a0[b('0x3')] = b('0x12');
    a0['x'] = G;
    a0['y'] = N;
    a0[b('0xb')] = b('0x1d');
    var a1 = a0;
    var a2 = {};
    a2[b('0x3')] = b('0x19');
    a2['x'] = G;
    a2['y'] = O;
    a2[b('0xb')] = 'lines';
    var a3 = a2;
    var R = [Z, a1, a3];
    var a4 = {};
    a4['title'] = b('0x16');
    var a5 = {};
    a5['title'] = b('0xd');
    var a6 = {};
    a6['t'] = 0x19;
    a6['l'] = 0x2d;
    a6['b'] = 0x23;
    a6['r'] = 0x5;
    var a7 = {};
    a7[b('0x5')] = 'Membrane\x20Currents';
    a7[b('0xe')] = a4;
    a7[b('0xc')] = a5;
    a7['margin'] = a6;
    var X = a7;
    Plotly[b('0x11')]('graph3', R, X);
    var a8 = {};
    a8[b('0x3')] = 'm';
    a8['x'] = G;
    a8['y'] = I;
    a8[b('0xb')] = b('0x1d');
    var a9 = a8;
    var aa = {};
    aa[b('0x3')] = 'n';
    aa['x'] = G;
    aa['y'] = K;
    aa[b('0xb')] = b('0x1d');
    var ab = aa;
    var ac = {};
    ac[b('0x3')] = 'h';
    ac['x'] = G;
    ac['y'] = J;
    ac[b('0xb')] = b('0x1d');
    var ad = ac;
    var R = [a9, ab, ad];
    var ae = {};
    ae[b('0x5')] = b('0x16');
    var af = {};
    af['t'] = 0x19;
    af['l'] = 0x2d;
    af['b'] = 0x23;
    af['r'] = 0x5;
    var ag = {};
    ag[b('0x5')] = b('0x15');
    ag['xaxis'] = ae;
    ag[b('0x1c')] = af;
    var X = ag;
    Plotly[b('0x11')](b('0x1f'), R, X);
    var ah = {};
    ah[b('0x3')] = 'm';
    ah['x'] = H;
    ah['y'] = I;
    ah['mode'] = 'lines';
    var a9 = ah;
    var ai = {};
    ai[b('0x3')] = 'n';
    ai['x'] = H;
    ai['y'] = K;
    ai['mode'] = b('0x1d');
    var ab = ai;
    var aj = {};
    aj[b('0x3')] = 'h';
    aj['x'] = H;
    aj['y'] = J;
    aj[b('0xb')] = b('0x1d');
    var ad = aj;
    var R = [a9, ab, ad];
    var ak = {};
    ak[b('0x5')] = '$\x20\x5ctext{Voltage\x20(mV)}\x20$';
    var al = {};
    al[b('0x5')] = b('0xd');
    var am = {};
    am['t'] = 0x19;
    am['l'] = 0x2d;
    am['b'] = 0x23;
    am['r'] = 0x5;
    var an = {};
    an[b('0x5')] = b('0x1b');
    an[b('0xe')] = ak;
    an[b('0xc')] = al;
    an[b('0x1c')] = am;
    var X = an;
    Plotly[b('0x11')](b('0x17'), R, X);
}
var methodDropdown = document[b('0x1')](b('0x9'));
var testdataDropdown = document[b('0x1')](b('0x20'));
$(methodDropdown)['on']('change', function() {
    var c = methodDropdown[b('0x13')][methodDropdown[b('0x4')]][b('0x18')];
    inputPlot[b('0x8')](c);
});
var inputPlot;
$(document)[b('0x7')](function() {
    var i = {};
    i['x'] = [-0x32, 0x15e];
    i['y'] = [-0x1, 0x50];
    var j = {};
    j['x'] = [0x0, 0x31, 0x32, 0x81, 0x82, 0xc7, 0xc8, 0x12b, 0x12c, 0x15e];
    j['y'] = [0x0, 0x0, 0xa, 0xa, 0x0, 0x0, 0x23, 0x23, 0x0, 0x0];
    j[b('0x2')] = i;
    var k = j;
    var l = {};
    l[b('0x5')] = b('0x16');
    var m = {};
    m['title'] = b('0xd');
    var n = {};
    n['t'] = 0x19;
    n['l'] = 0x2d;
    n['b'] = 0x23;
    n['r'] = 0xf;
    var o = {};
    o[b('0x5')] = b('0x21');
    o[b('0xe')] = l;
    o[b('0xc')] = m;
    o[b('0x1c')] = n;
    var p = o;
    var q = redraw_plots;
    inputPlot = new PlotlyDraggable(b('0xf'), k, p, q);
    inputPlot[b('0x1a')]();
});