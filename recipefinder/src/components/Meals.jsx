export default function Meals({ data }) {
  return (
    <ul>
      {data.meals.map(({ idMeal, strMeal, strCountry, strCategory }) => (
        <li key={idMeal}>
          <p>{strMeal}</p>
          <p>{strCategory}</p>
          <p>{strCountry}</p>
        </li>
      ))}
    </ul>
  );
}
