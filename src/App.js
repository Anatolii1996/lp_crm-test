import './App.scss';

function App() {

  const orders = [
    {
      id: 1,
      name: "Синий"
    },
    {
      id: 2,
      name: "39-й размер"
    },
    {
      id: 32,
      name: "39,5 размер"
    },
    {
      id: 65,
      name: "40-й размер"
    },
    {
      id: 4,
      name: "41-размер"
    },
    {
      id: 134,
      name: "8GB"
    }, {
      id: 7,
      name: "16GB"
    },
    {
      id: 98,
      name: "32GB"
    },
    {
      id: 6,
      name: "Space grey"
    },
    {
      id: 56,
      name: "Rose gold"
    },
    {
      id: 78,
      name: "Silver"
    },
    {
      id: 135,
      name: "Silver"
    },
  ]

  return (
    <div className="App">
      <div className="table_wrap">
        <table>
          <thead>
            <tr >
              <th>Статус</th>
              <th>Товар</th>
              <th>ID</th>
              <th>Название</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el) => {
              return (
                <tr key={el.id}>
                  <td></td>
                  <td>XXXX-</td>
                  <td>{el.id}</td>
                  <td>{el.name}</td>
                </tr>
              )
            })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
