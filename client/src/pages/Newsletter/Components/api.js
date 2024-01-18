export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit quaerat laborum adipisci possimus ut nam qui perferendis dolorum fuga? Est earum laudantium corrupti aliquam commodi. Autem officia explicabo illo. ",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2022-01-14T23:00:33.010+02:00",
      likes: "0",
    },
    {
      id: "2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit quaerat laborum adipisci possimus ut nam qui perferendis dolorum fuga? Est earum laudantium corrupti aliquam commodi. Autem officia explicabo illo. ",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2023-07-16T23:00:33.010+02:00",
      likes: "7",
    },
    {
      id: "3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit quaerat laborum adipisci possimus ut nam qui perferendis dolorum fuga? Est earum laudantium corrupti aliquam commodi. Autem officia explicabo illo. ",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2023-08-16T23:00:31.010+02:00",
      likes: "1",
    },
    {
      id: "4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit quaerat laborum adipisci possimus ut nam qui perferendis dolorum fuga? Est earum laudantium corrupti aliquam commodi. Autem officia explicabo illo. ",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2022-08-16T23:00:33.010+02:00",
      likes: "9",
    },
  ];
};



export const createComment = async (currentUser ,text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: currentUser.userId,
    username: currentUser.username,
    createdAt: new Date().toISOString(),
    likes: "0",
  };
};



export const getNewsletter = () => {
  return {
    id: "1",
    edition: "Edition 01",
    link: "https://drive.google.com/file/d/15uKL9oNQaD_7O60SP4M6PyXGI-4ta1sP/preview",
    downloadLink: "https://drive.google.com/file/d/15uKL9oNQaD_7O60SP4M6PyXGI-4ta1sP/view",
    likes: "11",
    downloads: "5",                                              
    views: "34",
  }
}

