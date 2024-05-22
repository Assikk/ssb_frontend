const reception = {
  title: 'Customer reception days',
  table: {
    head: [
      {
        id: 1,
        name: '№'
      },
      {
        id: 2,
        name: 'Name and surname'
      },
      {
        id: 3,
        name: 'Post'
      },
      {
        id: 4,
        name: 'Reception day'
      },
      {
        id: 5,
        name: 'Reception time'
      }
    ],
    body: [
      {
        id: 1,
        name: 'Ҳоқимшоҳ',
        surname: 'Бобозода',
        patronymic: 'Ҷурахон',
        post: 'Chairman of the Management Board',
        reception: {
          days: ['Wednesday', 'Saturday'],
          time: ['09:00-11:00', '09:00-11:00']
        }
      },
      {
        id: 2,
        name: 'Азизшо',
        surname: 'Ғарибшозода',
        patronymic: 'Қиматшо',
        post: 'First Deputy Chairman of the Management Board',
        reception: {
          days: ['Tuesday', 'Thursday'],
          time: ['09:00-11:00', '15:00-17:00']
        }
      },
      {
        id: 3,
        name: 'Шуҳрат',
        surname: 'Муҳиддинзода',
        patronymic: 'Фаридун',
        post: 'Deputy Chairman of the Management Board',
        reception: {
          days: ['Monday', 'Friday'],
          time: ['15:00-17:00', '09:00-11:00']
        }
      }
    ]
  }
}
export default reception
