const FeedStore = {
  namespaced: true,

  state: {
    feed: {
      1: {
        id: 1,
        datePosted: "0062-04-17T12:33:00.0000Z",
        content: {
          image: null,
          text: "He will render to each one according to his works: to those who by patience in well-doing seek for glory and honor and immortality, he will give eternal life; but for those who are self-seeking and do not obey the truth, but obey unrighteousness, there will be wrath and fury. There will be tribulation and distress for every human being who does evil, the Jew first and also the Greek, but glory and honor and peace for everyone who does good, the Jew first and also the Greek. For God shows no partiality.",
        },
        author: {
          name: "Paul, probably",
        },
      },
      2: {
        id: 2,
        datePosted: "0061-10-05T15:24:00.0000Z",
        content: {
          image: null,
          text: "Brothers, join in imitating me, and keep your eyes on those who walk according to the example you have in us. For many, of whom I have often told you and now tell you even with tears, walk as enemies of the cross of Christ. Their end is destruction, their god is their belly, and they glory in their shame, with minds set on earthly things. But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ, who will transform our lowly body to be like his glorious body, by the power that enables him even to subject all things to himself.",
        },
        author: {
          name: "Paul",
        },
      },
      3: {
        id: 3,
        datePosted: "0050-03-11T13:06:00.0000Z",
        content: {
          image: null,
          text: "You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored? It is no longer good for anything except to be thrown out and trampled under people's feet.",
        },
        author: {
          name: "Matthew",
        },
      },
    },
    comments: {
      1: {
        id: 1,
        topicId: 1,
        text: "Thanks for posting this. What a life changing story! unique#1",
        author: { name: "Todd Luce" },
      },
      2: {
        id: 2,
        topicId: 2,
        text: "Thanks for posting this. What a life changing story! unique#2",
        author: { name: "Todd Luce" },
      },
      3: {
        id: 3,
        topicId: 3,
        text: "Thanks for posting this. What a life changing story! unique#3",
        author: { name: "Todd Luce" },
      },
    },
  },
  getters: {
    getById: (store) => (id) => store.feed[id],
    getCommentsByPostId: (store) => (id) => {
      return Object.values(store.comments).filter((c) => c.topicId === id);
    },
    getCommentById: (store) => (id) => store.comments[id],
  },
};

export { FeedStore };
