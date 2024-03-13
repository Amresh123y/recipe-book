function Card({
  name,
  imageUrl,
  ingredients,
  instructions,
  cookingTime,
  userName,
}) {
  return (
    <div className="w-full border rounded-lg shadow border-gray-900">
      <a>
        <img
          className="rounded-t-lg w-full object-cover object-bottom h-48 "
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="py-2 px-5">
        <a href="#">
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-center text-indigo-600">
            {name}
          </h5>
        </a>
        <div className="mb-3">
          <p className="font-normal text-base md:text-lg text-black ">
            Ingredients:
          </p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-900 text-base">
                &nbsp; ➡️{ingredient}
              </li>
            ))}
          </ul>
        </div>
        <p className="mb-3 font-normal text-gray-700 text-center">
          {instructions}
        </p>
        <p className="mb-3 text-center bg-indigo-600 font-normal w-fit mx-auto px-4 rounded-lg text-white">
          Cooking Time: {cookingTime} minutes
        </p>
        <a className="inline-flex items-center px-3 py-2 text-base md:text-md font-medium text-center text-black">
          🙋🏻‍♂️ {userName}
        </a>
      </div>
    </div>
  );
}

export default Card;
