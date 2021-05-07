import configureStore from "../configureStore";
import { loadCats } from "../modules/cats";
const store = configureStore();
const mockData = [
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "36b",
    url: "picUrl",
    width: 1024,
    height: 683,
  },
  {
    breeds: [],
    categories: [{ id: 1, name: "hats" }],
    id: "37g",
    url: "picUrl",
    width: 605,
    height: 720,
  },
];

const initialState = {
  list: [],
  loading: false,
  page: 0,
  id: "",
};

beforeEach(() => {
  fetch.resetMocks();
});

describe("loading cats", () => {
  const catsSlice = () => store.getState().cats;

  it("it should initialize cats slice correctly", async () => {
    expect(catsSlice()).toMatchObject(initialState);
  });

  it("it should be fetched from the server and put in the store", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));

    await store.dispatch(loadCats({}));

    expect(catsSlice().list).toHaveLength(2);
  });

  describe("loading indicator", () => {
    it("should be true while fetching the cats", async () => {
      fetch.once(() => {
        expect(catsSlice().loading).toBe(true);
        return Promise.resolve(JSON.stringify(mockData));
      });

      await store.dispatch(loadCats({}));
    });

    it("should be false after the cats are fetched", async () => {
      fetch.mockResponseOnce(JSON.stringify(mockData));

      await store.dispatch(loadCats({}));

      expect(catsSlice().loading).toBe(false);
    });

    it("should be false if the server returns an error", async () => {
      fetch.once(() => {
        expect(catsSlice().loading).toBe(true);
        return Promise.reject(JSON.stringify("error"));
      });

      await store.dispatch(loadCats({}));

      expect(catsSlice().loading).toBe(false);
    });
  });

  describe("page number", () => {
    it("should be zero after load", async () => {
      fetch.mockResponseOnce(JSON.stringify(mockData));

      await store.dispatch(loadCats({}));

      expect(catsSlice().page).toBe(0);
    });

    it("should add one to page after subsequent load", async () => {
      fetch.mockResponseOnce(JSON.stringify(mockData));

      await store.dispatch(loadCats({ page: 1 }));

      expect(catsSlice().page).toBe(1);
    });
  });

  describe("category id", () => {
    it("should set id by category_ids parameter", async () => {
      fetch.mockResponseOnce(JSON.stringify(mockData));

      await store.dispatch(loadCats({ category_ids: "A" }));

      expect(catsSlice().id).toBe("A");
    });
  });
});
