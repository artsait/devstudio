let state = {
  profilePage: {
    posts: [
      { id: 1, mess: "hello", like: "12" },
      { id: 2, mess: "this my posts", like: "14" },
      { id: 3, mess: "bla bla bla", like: "26" }
    ]
  },
  messagesPage:{
    messages: [
      { id: 1, text: "Привет" },
      { id: 2, text: "Как продвигается работа над проектом?" },
      { id: 3, text: "Сколько нужно времени?" },
      { id: 4, text: "Отлично" },
      { id: 4, text: "Еще одно сообщение" }
    ],
    dialogs: [
      { id: 1, name: "Иван" },
      { id: 2, name: "Ирина" },
      { id: 3, name: "Сергей" },
      { id: 4, name: "Александр" },
      { id: 5, name: "Павел" },
      { id: 6, name: "Алексей" },
      { id: 7, name: "Антон" }
    ]
  }
}

export default state;
