
Lists.propTypes = {};

function Lists(props) {
  const a = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];

  let singleNumberArray = [];
  let total;

  a.forEach(
    (v) =>
      (singleNumberArray = singleNumberArray.concat(v.toString().split("")))
  );
  singleNumberArray = singleNumberArray.sort((a, b) => {
    return b - a;
  });
  total = singleNumberArray.join("");

  console.log(total);

  return (
    <div>
      <h3>1. Hãy viết hàm sắp xếp mãng số bên dưới để ra được số lớn nhất.</h3>
      <p>{total}</p>
    </div>
  );
}

export default Lists;
