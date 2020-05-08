import localForage from "localforage";

const store = localForage.createInstance({
  name: "Civy"
});

// store.setItem("key", "value");
// store.getItem('key', function (err, value) {
// if err is non-null, we got an error. otherwise, value is the value
//});

export default store;
