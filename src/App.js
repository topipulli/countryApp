import logo from './logo.svg';
import './App.css';
import {
  useQuery,
    gql,
  } from "@apollo/client";



  function App() {
    const GET_COUNTRIES = gql`
      query GetCountries {
        countries{
          code,
          name,
          continent{
            name,
          }
          }
    }
    `;
  
    const {loading, error, data} = useQuery(GET_COUNTRIES);
  
    if (loading) return <p>Loading...</p>;
    else if (error) return <p>Error...</p>
    else {
      return (
        <div className="App">
          <table>
            <th>Country code</th><th>Country name</th><th>Continent</th>
            <tbody>
              {
              data.countries.map((country, index) =>
                <tr key={index}>
                  <td>{country.code}</td>
                  <td>{country.name}</td>
                  <td>{country.continent.name}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </div>
      );
    }
  }
  

export default App;



