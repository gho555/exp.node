const promise = () => new Promise((res, rej) => res('hello world'));

(async () => {
    const res = await promise();
    console.log(res);
})();
