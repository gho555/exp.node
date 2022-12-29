const promise = () => new Promise((res, rej) => res('hello world'));
const promise2 = () => {
  return new Promise((res, rej) => {
    setInterval(() => {
      res('hello world2');
    }, 2000);
  });
};

(async () => {
  const res = await promise();
  console.log(res);
  const res2 = await promise2();
  console.log(res2);
})();
