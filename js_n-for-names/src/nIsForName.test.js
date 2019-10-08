'use strict';

const nIsForName = require('./nIsForName');

test('No names', () => {
  expect(nIsForName([]))
    .toEqual([]);
});

test('Some actors', () => {
  expect(nIsForName(
    ['Tom Hanks', 'Julia Roberts', 'James Earl Jones',
      'Sylvester Stallone', 'Leonardo DiCaprio', 'Amy Adams']))
    .toEqual([]);
});

test('Some actors and movie directors', () => {
  expect(nIsForName(
    ['Harrison Ford', 'Robert De Niro', 'Morgan Freeman', 'Matt Damon',
      'Christofer Nolan', 'Natalie Portman', 'Martin Scorsese', 'Nick Nolte']))
    .toEqual(
      ['Robert De Niro', 'Christofer Nolan', 'Natalie Portman', 'Nick Nolte']);
});

test('Five people', () => {
  expect(nIsForName(
    ['Rlnzmtkwq Mkoajjzvk', 'Ydsmkww Zsgsp Nqnvxzg', 'Dol Gmimey Tj',
      'Bcvldtz Itloa', 'Negy Wf Bpr']))
    .toEqual(['Ydsmkww Zsgsp Nqnvxzg', 'Negy Wf Bpr']);
});

test('Ten people', () => {
  expect(nIsForName(
    ['Jjuwg Hjp Kzgsol', 'Estyapvg Byaqulpk Waheicsbv', 'Tter Lkjsigf',
      'Mlxi Lilz', 'Obkg Haotkyao', 'Ipllprypc Laueddl Utld',
      'Rimygcu Yprqvu Etpgxjt', 'Ryft Iwrcuhx', 'Fl Vxme', 'Lbjhj Woeythqpp']))
    .toEqual([]);
});

test('15 people', () => {
  expect(nIsForName(
    ['Ixmvb Orqazzuqj', 'Vdfc Qff', 'Faixnzxo Wwm', 'Ethki Timge',
      'Frwa Bpxf', 'Zlcfqi Jfrvg Hh', 'Bmzpnbd Lbpgcshqe Wu',
      'Oatdbyb Tpoqv Pmut', 'Tfmn Biwdhpmy Zyelcslvi', 'Bnp Jciv',
      'Qtaqspr Qoeww', 'Rptncou Lp Ex', 'Qnwjqzts Esd', 'Mtdc Koh',
      'Re Tiarxr Jiacyuy']))
    .toEqual([]);
});

test('20 people', () => {
  expect(nIsForName(
    ['Yuouffi Zyagtpkcz Ukzug', 'Vseeke Haby Pwhd', 'Ge Xa Fz',
      'Vs Cfceknb Hrtm', 'Hxdthw Zglz Eekeh', 'Oism Dxe', 'Mywjwgmc Etjh',
      'Pasr Ajp Dehnb', 'Svedmtxvq Cxud', 'Btwuwzjy Jowmashhl Ywsc',
      'Bhfzefus Ydezlwuj', 'Ubcak Dtvwmx Sgmhzwbq', 'Vidaijg Wh Yyed',
      'Sgdszdfsw Nvskm', 'Hmjf Xzh Alxikwhlc', 'Rzpe Zinmhm',
      'Qxagodhm Qtwfkacrn Cpbooztpv', 'Pd Gsjxgj', 'Ckxvasss Gefscf Ydj',
      'Pd Wkoig Bpvf']))
    .toEqual(['Sgdszdfsw Nvskm']);
});

test('100 people', () => {
  expect(nIsForName(
    ['Vgdowmg Goggqez', 'Mtodj Moxwcg Gadpy', 'Aqfgmqq Ueesbe Knk',
      'Ytqjmmgsb Nt', 'Ebmr Sm Khjog', 'Cxhwuj Hd', 'Nd Nwtbto', 'Unqe Oqyjty',
      'Qokmwzkz Fl Cjfxlyfm', 'Pkhdbcpy Lekxjv', 'Ngctxoexr Pppppc',
      'Rzfotxuo Tnv', 'Kuwzh Hmewwynpe', 'Fh Ndzaigdt',
      'Vqissmbx Ipuucqmu Jfhjnxg', 'Erfggtpv Toui Eqzeg', 'Uu Cyw', 'Otbl Vh',
      'Flj Coh Ltun', 'Vcdwmowtf Hpmyhwj', 'Kniuobz Zj Ganarqpg',
      'Uxmlu Zwclvxuuf Aibo', 'Djsnbrwhg Tlexfhu', 'Isp Tzd Axj',
      'Iybx Nmzkbszev', 'Kv Ewuvtsxe', 'Ieysfdmja Vxmd Iad', 'Wskw Ugozwh',
      'Qrescbl Gfvqq Jykpba', 'Rmv Okqhi Lqirg', 'Tpuycsif Rxhjrxlml Cbkce',
      'Lh Roehdk Ldkuisedl', 'Sfwzjptp Msbczkdhi', 'Soeqkh Rvoslxuo',
      'Nhmhqnqq Zixcg Euwpf', 'Fgbz Heo Iogtzck', 'Ostpp Odxm Tr', 'Rtosnvy Vn',
      'Nyq Dkstjkh', 'Rajam Odnerz', 'Lwlacfj Olc Gfsflxdlx',
      'Brbp Obbbitnlw Jri', 'Tz Xsxikto Ygozsnbia', 'Aclxrwkvd Svbps Xbfd',
      'Kb Izi', 'Cfa Qfntqwh', 'Av Hzcqsdmp', 'Uzrxnrcnk Jjsjmti',
      'Kcfxemupi Ewzfbsj', 'Eix Qxduxj', 'Anlirctl Tw Ycvlzjmt',
      'Uf Fennpqu Uftn', 'Vcxvkd Dywadyyk Ewgvjbmpt', 'Tanpdh Bsupbs',
      'Hfginvpag Ido Wcmet', 'Jplqozxl Hcsgttf', 'Bchfhzp Pgej',
      'Tj Wwijhnpc Szfkbxidd', 'Sv Sfg', 'Ztosngs Eykeuvll Sgkgdtypk',
      'Adc Adavv', 'Hiwnotd Gfnwwobd', 'Jgvgwvgs Evkt', 'Gq Ho',
      'Olaqdqh Dshainj Roekbqh', 'Uevb Yxt Aq', 'Tcoexst Zqvxh', 'Spb Szjdykur',
      'Vwwuzh Golpfpfg Lbtct', 'Sxlbrl Jdfwmh Cswfh', 'Wrfsz Jcol',
      'Hxxv Acbbrk Pfuklhlyr', 'Xiilcl Cmi Hqmohb', 'Vvnhcud Wagxn Kfrdtrpk',
      'Izo Brzmos', 'Ur Fhg Ke', 'Zkw Ssyhdhi Eotekbdzz', 'Fjq Ilofdt',
      'Hvoqr Akeazmw Gecpm', 'Hz Ynxv', 'Ddwwddkxm Hfx', 'Bvayu Etjnxnb',
      'Dxtcbder Kaz Tyx', 'Wtan Fexjvb', 'Zpxj Hfhkjopii Hcna', 'Htvi Jjkmorc',
      'Yrodgvj Ogtsve', 'Qal Nyq Aetib', 'Bdzxmjrv Jtxjotr Bjomq',
      'Xjqcsrvo Ueims Rz', 'Fw Lbqgcl', 'Htjdy Licgvc Tfinqx',
      'Btrrbvl Hmyqqnsoy Mcu', 'Ulxfqt Aljowmd', 'Xzhsrqgd Onufl',
      'Qri Lriu Fx', 'Cffhwb Vxeoq', 'Lhfeic Jng', 'Hlnhlukp Eepiq',
      'Gaqaxqbfo Fszol Fgrpi']))
    .toEqual(
      ['Ytqjmmgsb Nt', 'Nd Nwtbto', 'Ngctxoexr Pppppc', 'Fh Ndzaigdt',
        'Iybx Nmzkbszev', 'Nhmhqnqq Zixcg Euwpf', 'Nyq Dkstjkh',
        'Qal Nyq Aetib']);
});

test('Should ignore "N" inside the word', () => {
  expect(nIsForName(
    ['Jjuwg Hjp Kzgsol', 'Estyapvg Byaqulpk Waheicsbv', 'Tter Lkjsigf',
      'Mlxi Lilz', 'Obkg Haotkyao', 'Ipllprypc Laueddl Utld', 'DragN Dropo',
      'Rimygcu Yprqvu Etpgxjt', 'Ryft Iwrcuhx', 'Fl Vxme', 'Lbjhj Woeythqpp']))
    .toEqual([]);
});
