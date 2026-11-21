const deliveryAnimation = {
  v: '5.7.4',
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: 'Nawras delivery route',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'moving parcel',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [38, 104, 0], e: [162, 72, 0] },
            { t: 45, s: [162, 72, 0], e: [38, 104, 0] },
            { t: 90, s: [38, 104, 0], e: [38, 104, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
        sk: { a: 0, k: 0 },
        sa: { a: 0, k: 0 },
      },
      ao: 0,
      shapes: [
        { ty: 'rc', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [28, 22] }, r: { a: 0, k: 5 }, nm: 'parcel' },
        { ty: 'fl', c: { a: 0, k: [0.43, 0.26, 0.74, 1] }, o: { a: 0, k: 100 }, r: 1, nm: 'purple fill' },
        { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 }, sk: { a: 0, k: 0 }, sa: { a: 0, k: 0 } },
      ],
    },
  ],
};

export default deliveryAnimation;
